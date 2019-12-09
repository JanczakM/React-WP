import React from 'react';
import PostBox from '../components/PostBox';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import AdSense from 'react-adsense';
import Axios from 'axios';
import ReactGA from 'react-ga';
import {settings} from '../settings/Settings';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPosts: [],
      seasonPosts: [],
      babyPosts: [],
      seasonMsg: '',
    };
  }

  componentDidMount(){
    this.fetchPosts(new Date().getMonth() + 1);
    ReactGA.initialize(settings.analytics);
    ReactGA.pageview(settings.wordpressLink);
  }

  fetchPosts(month){
    let seasonMsg, seasonTag;

    if (month === 12 || month === 1 || month === 2) {
      seasonMsg = 'Inspiracje na zimowe ferie';
      seasonTag = settings.winterPostCategory;
    }
    else if ((month > 9) && (month < 12)) {
      seasonMsg = 'Dokąd uciec od jesiennej szarugi?';
      seasonTag = settings.autumnPostCategory;
    }
    else if ((month > 5) && (month <= 9)){
      seasonMsg = 'Pomysły na wakacyjne wyjazdy';
      seasonTag = settings.summerPostCategory;
    }
    else {
      seasonMsg = 'Podróżniczy lifestyle';
      seasonTag = settings.lifestylePostCategory;
    }

    Axios.all([
      Axios.get(settings.domain + '/wp-json/wp/v2/posts/'),
      Axios.get(settings.domain + '/wp-json/wp/v2/posts/?categories=' + settings.babyPostCategory),
      Axios.get(settings.domain + '/wp-json/wp/v2/posts/?tags=' + seasonTag)
    ])
    .then(Axios.spread((newPosts, babyPosts, seasonPosts) => {
      const slicedNewPosts = newPosts.data.slice(0,6);
      const slicedBabyPosts = babyPosts.data.slice(0,3);
      const slicedSeasonPosts = seasonPosts.data.slice(0,3);

      const newPostsArr = [];
      const babyPostsArr = [];
      const seasonPostsArr = [];

      for(let newPost of slicedNewPosts){
        newPostsArr.push(newPost);
      }

      for(let babyPost of slicedBabyPosts){
        babyPostsArr.push(babyPost);
      }

      for(let seasonPost of slicedSeasonPosts){
        seasonPostsArr.push(seasonPost);
      }

      this.setState({
        newPosts: newPostsArr,
        babyPosts: babyPostsArr,
        seasonPosts: seasonPostsArr,
        seasonMsg: seasonMsg
      })
    }))
    .catch(err => {
      console.log(err.message);
    });
  }

  render(){
      return (
          <div>
            <MainHeader />
              <section>
                <div className='container'>
                  <h2 className='section-title' id='posts'>Najnowsze wpisy</h2>
                  <div className='posts-section'>
                    {this.state.newPosts.map(post => {
                      return <PostBox key={post.id} image={post.featured_img} title={post.title} link={post.slug} />
                    })}
                  </div>
                </div>
              </section>
              <section className='home-ad'>
                <div className='container'>
                </div>
              </section>
              <section>
                <div className='container'>
                  <h2 className='section-title'>Podróże z dzieckiem</h2>
                  <div className='posts-section'>
                    {this.state.babyPosts.map(post => {
                      return <PostBox key={post.id} image={post.featured_img} title={post.title} link={post.slug} />
                    })}
                  </div>
                </div>
              </section>
              <section className='home-ad'>
                <div className='container'>
                  <AdSense.Google
                    client= {settings.adSenseClient}
                    slot= {settings.adSenseSlot}
                    style={{ display: 'block' }}
                    data-full-width-responsive='true'
                  />
                </div>
              </section>
              <section>
                <div className='container'>
                  <h2 className='section-title'>{this.state.seasonMsg}</h2>
                  <div className='posts-section'>
                    {this.state.seasonPosts.map(post => {
                      return <PostBox key={post.id} image={post.featured_img} title={post.title} link={post.slug} />
                    })}
                  </div>
                </div>
              </section>
              <Footer />
          </div>
      )
  }
}

export default Home;
