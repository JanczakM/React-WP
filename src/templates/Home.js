import React from 'react';
import PostBox from '../components/PostBox';
import BookingMain from '../components/BookingMain';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import AdSense from 'react-adsense';
import Axios from 'axios';
import ReactGA from 'react-ga';
import {wordpressLink} from '../settings/Settings';

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
    this.fetchnewPosts();
    this.fetchbabyPosts();
    this.fetchseasonData(new Date().getMonth() + 1);
    ReactGA.initialize('UA-61591156-1');
    ReactGA.pageview(wordpressLink);
  }

  fetchnewPosts(){
    Axios
      .get('https://aktywnepodroze.pl/wp-json/wp/v2/posts/')
      .then(response => {
        const slicedResp = response.data.slice(0,6);
        const posts = [];
        for(let post of slicedResp){
          posts.push(post);
        }
        this.setState({newPosts: posts})
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  fetchbabyPosts(){
    Axios
    .get('https://aktywnepodroze.pl/wp-json/wp/v2/posts/?categories=137')
    .then(response => {
      const slicedResp = response.data.slice(0,3);
      const posts = [];
      for(let post of slicedResp){
        posts.push(post);
      }
      this.setState({babyPosts: posts})
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  fetchseasonData(month){
    let seasonMsg, seasonTag;

    if (month === 12 || month === 1 || month === 2) {
      seasonMsg = 'Inspiracje na zimowe ferie';
      seasonTag = 18;
    }
    else if ((month > 9) && (month < 12)) {
      seasonMsg = 'Dokąd uciec od jesiennej szarugi?';
      seasonTag = 139;
    }
    else if ((month > 5) && (month <= 9)){
      seasonMsg = 'Pomysły na wakacyjne wyjazdy';
      seasonTag = 141;
    }
    else {
      seasonMsg = 'Podróżniczy lifestyle';
      seasonTag = 140;
    }

    Axios
    .get('https://aktywnepodroze.pl/wp-json/wp/v2/posts/?tags=' + seasonTag)
    .then(response => {
      const slicedResp = response.data.slice(0,3);
      const posts = [];
      for(let post of slicedResp){
        posts.push(post);
      }
      this.setState({seasonPosts: posts})
      this.setState({seasonMsg: seasonMsg})
    })
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
                      return <PostBox key={post.id} {...post} />
                    })}
                  </div>
                </div>
              </section>
              <section className='home-ad'>
                <div className='container'>
                  <BookingMain />
                </div>
              </section>
              <section>
                <div className='container'>
                  <h2 className='section-title'>Podróże z dzieckiem</h2>
                  <div className='posts-section'>
                    {this.state.babyPosts.map(post => {
                      return <PostBox key={post.id} {...post} />
                    })}
                  </div>
                </div>
              </section>
              <section className='home-ad'>
                <div className='container'>
                  <AdSense.Google
                    client='ca-pub-5307925712437665'
                    slot='5106772838'
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
                      return <PostBox key={post.id} {...post} />
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
