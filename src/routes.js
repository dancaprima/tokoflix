import React from 'react';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home.js';
import Detail from './containers/Detail/Detail.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
