import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import {settings} from '../settings/Settings';

const Notfound = () => {
  ReactGA.initialize(settings.analytics);
  ReactGA.pageview(settings.wordpressLink + '404');
    return (
        <div>
          <Header />
            Nie ma takiej strony :-(
          <Footer />
        </div>
    )
}

export default Notfound;
