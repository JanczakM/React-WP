import React from 'react';
import {Link} from 'react-router-dom';
import PostBox from '../components/PostBox';
import BookingMain from '../components/BookingMain';
import MainHeader from '../components/MainHeader';
import {wordpressLink} from '../settings/Settings';
import AdSense from 'react-adsense';
import Axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPosts: [],
      seasonPosts: [],
      babyPosts: [],
    };
  }

  componentDidMount() {
    this.fetchnewPosts();
    this.fetchbabyPosts();
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
              <Link to={wordpressLink + 'pages/wspolpraca'}>Współpraca</Link>
          </div>
      )
  }
}

export default Home;
