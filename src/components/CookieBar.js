import CookieConsent from 'react-cookie-consent';
import React from 'react';
import {Link} from 'react-router-dom';
import {settings} from '../settings/Settings';

const CookieBar = ({children}) => {
  return (
    <div>
    {children}
      <CookieConsent
        location='bottom'
        buttonText='OK'
        acceptOnScroll={true}
        acceptOnScrollPercentage={90}
        style={{ background: '#000000', justifyContent: 'center' }}
        buttonStyle={{ color: '#000000', fontSize: '13px', flex: 'none' }}
        contentStyle={{ margin: '10px', flex: 'none' }}
    >
        Ta strona korzysta z plików cookies. {' '}
        <Link to={'pages/' + settings.cookiePolicySite}>Polityka plików cookies</Link>
      </CookieConsent>
    </div>
  )
}

export default CookieBar
