import { SET_BALANCE, SET_MOVIE } from './type';

export const buyMovies = (idMovie, price) => {
  return dispatch => {
    dispatch({
      type: SET_BALANCE,
      price: price
    });

    dispatch({
      type: SET_MOVIE,
      idMovie: idMovie
    });
  };
};
