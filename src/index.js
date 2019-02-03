import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import rootReducer from './services/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));

serviceWorker.unregister();
