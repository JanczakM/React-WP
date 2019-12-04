import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Booking from '../components/Booking';
import SimilarPosts from '../components/SimilarPosts';
import ReactGA from 'react-ga';
import {wordpressLink, mainphoto} from '../settings/Settings';

class Single extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      content: '',
      imageAlt: '',
      categories: [],
      similarPosts: [],
    };
  }

  componentDidMount() {
    this.fetchPostData(this.props);
    ReactGA.initialize('UA-61591156-1');
    ReactGA.pageview(wordpressLink + this.props.match.params.slug);
  }

  componentDidUpdate(prevProps) {
   if (this.props.match.params.slug !== prevProps.match.params.slug) {
     this.fetchPostData(this.props);
     window.scrollTo({ top: 0, behavior: 'smooth' });
     ReactGA.initialize('UA-61591156-1');
     ReactGA.pageview(wordpressLink + this.props.match.params.slug);
   }
  }

  fetchPostData(props){
      Axios
        .get('https://aktywnepodroze.pl/wp-json/wp/v2/posts/?slug=' + props.match.params.slug)
        .then(response => {
          this.setState({
            title: ReactHtmlParser(response.data[0].title.rendered),
            content: ReactHtmlParser(response.data[0].content.rendered),
            image: response.data[0].featured_img.url,
            imageAlt: response.data[0].featured_img.alt,
            categories: response.data[0].categories,
          })

          const joined = this.state.categories.join(', ');
          Axios
            .get('https://aktywnepodroze.pl/wp-json/wp/v2/posts/?categories=' + joined)
            .then(response => {
              this.setState({
                similarPosts: response.data,
              })
            })
            .catch(err => {
              console.log(err.message);
            });
        })
        .catch(err => {
          this.setState({
            title: 'Nie ma takiej strony :-(',
            image: mainphoto,
            imageAlt: 'widok na morze'
          })
          console.log(err.message);
        });
  }

  render(){
    return (
      <div>
        <Header />
        <main className='container-single'>
          <div className='single-top'>
            <img src={this.state.image} alt={this.state.imageAlt} className='single-fimg'></img>
            <h1 className='single-title'>{this.state.title}</h1>
          </div>
          <div className='single-content'>{this.state.content}</div>
        </main>
        <aside className='container-single single-content'>
          {this.state.title ? <h2 className='headers'>Tutaj możesz sprawdzić dostępność noclegów:</h2> : ''}
          {this.state.title ? <Booking type='single' /> : ''}
          {this.state.similarPosts.length > 0 ? <h2 className='headers'>Podobne wpisy:</h2> : ''}
          {this.state.similarPosts.length > 0 ? <SimilarPosts {...this.state.similarPosts} /> : ''}
        </aside>
        <Footer />
      </div>
      )
  }
}


export default Single;
