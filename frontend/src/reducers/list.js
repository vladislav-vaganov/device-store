import { INIT_LIST } from '../actions/list';

export const listReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_LIST:
      return action.list;
    default:
      return state;
  }
};
