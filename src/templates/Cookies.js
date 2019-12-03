import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-61591156-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class Cookies extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  componentDidMount() {
    this.fetchPageData(this.props);
  }

  fetchPageData(props){
      Axios
        .get('https://aktywnepodroze.pl/wp-json/wp/v2/pages?slug=polityka-plikow-cookies')
        .then(response => {
          this.setState({
            title: ReactHtmlParser(response.data[0].title.rendered),
            content: ReactHtmlParser(response.data[0].content.rendered),
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
          <h1>{this.state.title}</h1>
          <div className='single-content'>{this.state.content}</div>
        </main>
        <Footer />
      </div>
      )
  }
}


export default Cookies;
