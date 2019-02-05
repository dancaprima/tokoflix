import React from 'react';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import Header from './containers/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={Detail} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

export default Routes;
