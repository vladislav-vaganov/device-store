export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const addToCart = (index) => ({
  type: ADD_TO_CART,
  index,
});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  index,
});

export const updateCart = (id, delta) => ({
  type: UPDATE_CART,
  id,
  delta,
});
