import React from 'react';
import {wordpressLink} from '../settings/Settings';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
          <div className='container'>
            <Link className='logo' to={wordpressLink}>aktywne podróże</Link>
            <span className='header-contact'>
              <a href='https://facebook.com/aktywnepodroze'><i className="fab fa-facebook-square"></i></a>
              <a href='https://www.instagram.com/aktywnepodroze.pl/'><i className="fab fa-instagram"></i></a>
              <Link to={wordpressLink + 'pages/wspolpraca'}>Współpraca</Link>
            </span>
          </div>
        </header>
    )
}

export default Header;
