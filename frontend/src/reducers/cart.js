import { UPDATE_CART } from '../actions/cart';

export const cartReducer = (state = {}, { type, id, delta }) => {
  switch (type) {
    case UPDATE_CART: {
      const { [id]: quantity = 0 } = state;

      return {
        ...state,
        [id]: quantity + delta,
      };
    }

    default:
      return state;
  }
};
