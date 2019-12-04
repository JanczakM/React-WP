import React from 'react';
import {settings} from '../settings/Settings';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
          <div className='container'>
            <Link className='logo' to={settings.wordpressLink}>{settings.title}</Link>
            <span className='header-contact'>
              <a href={settings.facebookLink}><i className="fab fa-facebook-square"></i></a>
              <a href={settings.instagramLink}><i className="fab fa-instagram"></i></a>
              <Link to={settings.wordpressLink + 'pages/' + settings.cooperationSite}>Współpraca</Link>
            </span>
          </div>
        </header>
    )
}

export default Header;
