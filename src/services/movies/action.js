import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAIL } from './type';
import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = (page = 1) => {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIES
    });
    axios
      .get(
        `${ROOT_URL}/now_playing?api_key=7a519944f713165cb0dda9c47e7adf59&language=en-US&page=${page}&region=ID`
      )
      .then(result =>
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: result.data.results,
          totalPages: result.data.total_pages
        })
      )
      .catch(err =>
        dispatch({
          type: FETCH_MOVIES_FAIL
        })
      );
  };
};
