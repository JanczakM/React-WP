import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import {settings} from '../settings/Settings';

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
    ReactGA.initialize(settings.analytics);
    ReactGA.pageview(settings.wordpressLink + settings.cookiePolicySite);
  }

  fetchPageData(props){
      Axios
        .get(settings.domain + '/wp-json/wp/v2/pages?slug=' + settings.cookiePolicySite)
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
