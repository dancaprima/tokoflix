import React from 'react';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>
);

export default Routes;
