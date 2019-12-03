import React from 'react';
import './styles/global.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {wordpressLink} from './settings/Settings';

import Single from './templates/Single';
import Home from './templates/Home';
import Notfound from './templates/Notfound';
import Cooperate from './templates/Cooperate';
import Cookies from './templates/Cookies';

import CookieBar from './components/CookieBar';

function App() {
  return (
    <BrowserRouter>
      <CookieBar>
        <Switch>
         <Route exact path={wordpressLink} component={Home} />
         <Route exact path={wordpressLink + 'pages/wspolpraca'} component={Cooperate} />
         <Route exact path={wordpressLink + 'pages/polityka-plikow-cookies'} component={Cookies} />
         <Route path={wordpressLink + ':slug'} component={Single} />
         <Route component={Notfound} />
        </Switch>
      </CookieBar>
    </BrowserRouter>
  );
}

export default App;
