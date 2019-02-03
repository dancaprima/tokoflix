import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';

const rootReducers = combineReducers({
  movies: movieReducer
});

export default rootReducers;
