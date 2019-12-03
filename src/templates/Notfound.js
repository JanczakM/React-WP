import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import {wordpressLink} from '../settings/Settings';

const Notfound = (props) => {
  ReactGA.initialize('UA-61591156-1');
  ReactGA.pageview(wordpressLink + '404');
    return (
        <div>
          <Header />
            Nie ma takiej strony :-(
          <Footer />
        </div>
    )
}

export default Notfound;
