import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import app from './app.js';
import landing from './landing.js'


ReactDOM.render((
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={landing}/>
        <Route exact path='/chat' component={app}/>
      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
