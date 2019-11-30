import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {wordpressLink} from './settings/Settings'

import Single from './templates/Single';
import Home from './templates/Home';
import Notfound from './templates/Notfound';
import Cooperate from './templates/Cooperate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path={wordpressLink} component={Home} />
       <Route exact path={wordpressLink + 'pages/wspolpraca'} component={Cooperate} />
       <Route path={wordpressLink + ':slug'} component={Single} />
       <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
