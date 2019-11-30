import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

class Single extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      content: '',
      imageAlt: '',
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
          })
        })
        .catch(err => {
          console.log(err.message);
        });
  }

  render(){
    return (
      <div>
        <img src={this.state.image} alt={this.state.imageAlt}></img>
        <h1>{this.state.title}</h1>
        <div>{this.state.content}</div>
      </div>
      )
  }
}


export default Single;
