import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SimilarPosts from '../components/SimilarPosts';
import BookingSingle from '../components/BookingSingle'

class Single extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      content: '',
      imageAlt: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchPostData(this.props);
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
        })
        .catch(err => {
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
        <aside className='container-single'>
          <h2 className='headers'>Możesz od razu sprawdzić dostępność noclegów:</h2>
          <BookingSingle />
          <h2 className='headers'>Podobne wpisy:</h2>
          <SimilarPosts categories={this.state.categories} />
        </aside>
        <Footer />
      </div>
      )
  }
}


export default Single;
