import React from 'react';
import {wordpressLink} from '../settings/Settings';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
          <div className='container footer-container'>
            <div className='footer-box'>
              Projekt bloga: <a href='mailto: m.janczak@int.pl'>Małgorzata Jańczak</a>
            </div>
            <div className='footer-box'>
              <a href='https://facebook.com/aktywnepodroze'><i className="fab fa-facebook-square"></i></a>
              <a href='https://www.instagram.com/aktywnepodroze.pl/'><i className="fab fa-instagram"></i></a>
            </div>
            <div className='footer-box'>
              <Link to={wordpressLink + 'pages/wspolpraca'}>Współpraca</Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
