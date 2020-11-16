import { INIT_LIST, UPDATE_LIST_ITEM_QUANTITY } from '../actions/list';

export const listReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_LIST:
      return action.list;

    case UPDATE_LIST_ITEM_QUANTITY: {
      const { index, quantity } = action;

      const updatedState = [...state];
      updatedState[index] = { ...state[index], quantity };

      return updatedState;
    }

    default:
      return state;
  }
};
