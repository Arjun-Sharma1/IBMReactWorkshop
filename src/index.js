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
        //TODO: Add route for switching to actual app after name is chosen

      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
