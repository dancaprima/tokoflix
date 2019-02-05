import {
  FETCH_DETAIL_MOVIE,
  FETCH_DETAIL_MOVIE_FAIL,
  FETCH_DETAIL_MOVIE_SUCCESS
} from './type';

const initialState = {
  data: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_MOVIE:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case FETCH_DETAIL_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
