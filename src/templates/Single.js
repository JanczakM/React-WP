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
          })
          Axios
            .get(response.data[0]._links['wp:featuredmedia'][0].href)
            .then(res => {
                  this.setState({
                    image: res.data.guid.rendered,
                    imageAlt: res.data.alt_text,
                  })
            })
            .catch(err => {
              console.log(err.message);
            });

        })
        .catch(err => {
          console.log(err.message);
        });
  }

  render(){
    return (
      <div className='Post'>
        <img src={this.state.image} alt={this.state.imageAlt}></img>
        <h1>{this.state.title}</h1>
        <div>{this.state.content}</div>
      </div>
      )
  }
}


export default Single;
