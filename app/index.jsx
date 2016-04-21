import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {IndexRoute} from 'react-router';
import Home from './home/index.jsx';
import About from './about/index.jsx';
import Contact from './contact/index.jsx';
import MainContainer from './home/MainContainer.jsx';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <IndexRoute component={MainContainer} />
    </Route>
  </Router>),
  document.getElementById('app'));
