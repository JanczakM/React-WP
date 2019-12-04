import React from 'react';
import {settings} from '../settings/Settings';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
          <div className='container footer-container'>
            <div className='footer-box'>
              Projekt bloga: <a href='mailto: m.janczak@int.pl'>Małgorzata Jańczak</a>
            </div>
            <div className='footer-box'>
              <a href={settings.facebookLink}><i className="fab fa-facebook-square"></i></a>
              <a href={settings.instagramLink}><i className="fab fa-instagram"></i></a>
            </div>
            <div className='footer-box'>
              <Link to={settings.wordpressLink + 'pages/' + settings.cooperationSite}>Współpraca</Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
