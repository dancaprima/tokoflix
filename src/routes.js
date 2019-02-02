import React, { Component } from 'react';

import Home from './containers/Home/Home.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default Routes;
