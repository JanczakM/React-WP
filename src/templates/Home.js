import React from 'react';
import {Link} from 'react-router-dom';
import {wordpressLink} from '../settings/Settings'
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPosts: [],
      seasonPosts: [],
      amazingPosts: [],
    };
  }

  componentDidMount() {
    this.fetchnewPosts();
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
        console.log(this.state)
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render(){
      return (
          <div>
              <Link to={wordpressLink + 'pages/wspolpraca'}>Współpraca</Link>
              <h2>Najnowsze wpisy</h2>
              <div>
                {this.state.newPosts.map(post => {
                  return (
                    <Link to={post.link} key={post.id}>
                      <div>
                        <img src={post.featured_img.url} alt={post.featured_img.alt}></img>
                        {ReactHtmlParser(post.title.rendered)}
                        <div>{ReactHtmlParser(post.excerpt.rendered)}</div>
                      </div>
                    </Link>)
                })}
              </div>
          </div>
      )
  }
}

export default Home;
