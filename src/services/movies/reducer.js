import { FETCH_MOVIES, FETCH_MOVIES_FAIL, FETCH_MOVIES_SUCCESS } from './type';

const initialState = {
  data: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
