import {
  FETCH_DETAIL_MOVIE,
  FETCH_DETAIL_MOVIE_FAIL,
  FETCH_DETAIL_MOVIE_SUCCESS
} from './type';

import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3/movie';

export const fetchDetailMovie = id => {
  return dispatch => {
    dispatch({
      type: FETCH_DETAIL_MOVIE
    });
    axios
      .get(
        `${ROOT_URL}/${id}?api_key=7a519944f713165cb0dda9c47e7adf59&append_to_response=credits,similar,recommendations`
      )
      .then(result =>
        dispatch({
          type: FETCH_DETAIL_MOVIE_SUCCESS,
          payload: result.data
        })
      )
      .catch(err =>
        dispatch({
          type: FETCH_DETAIL_MOVIE_FAIL
        })
      );
  };
};
