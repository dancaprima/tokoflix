import { SET_BALANCE, SET_MOVIE } from './type';

const initialState = {
  balance: 100000,
  ownedMovie: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: state.balance - action.price
      };
    case SET_MOVIE:
      return {
        ...state,
        ownedMovie: [...state.ownedMovie, action.idMovie]
      };
    default:
      return state;
  }
};
