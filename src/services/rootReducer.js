import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';
import detailMovieReducer from './detail-movie/reducer';
import account from './account/reducer';

const rootReducers = combineReducers({
  movies: movieReducer,
  detailMovie: detailMovieReducer,
  account
});

export default rootReducers;
