import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-61591156-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Notfound = (props) => {
    return (
        <div>
          <Header />
            Nie ma takiej strony :-(
          <Footer />
        </div>
    )
}

export default Notfound;
