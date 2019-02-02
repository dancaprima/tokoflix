import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

function todoApp(state = {}, action) {
  return state;
}
const store = createStore(todoApp);

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));

serviceWorker.unregister();
