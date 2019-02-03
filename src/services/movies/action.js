import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAIL } from './type';

const URL =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=7a519944f713165cb0dda9c47e7adf59&language=en-US&page=1&region=ID';

export const fetchMovies = (page = 1) => {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIES
    });
    fetch(`${URL}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result =>
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: result.results
        })
      )
      .catch(err =>
        dispatch({
          type: FETCH_MOVIES_FAIL
        })
      );
  };
};
