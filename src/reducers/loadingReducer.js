import { SET_LOADING } from '../constants/actionsTypes';

export const loadingReducer = (state = false, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_LOADING:
      return payload;
    default:
      return state;
  }
};
