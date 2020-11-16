export const INIT_LIST = 'INIT_LIST';
export const UPDATE_LIST_ITEM_QUANTITY = 'UPDATE_LIST_ITEM_QUANTITY';

export const initList = (list = []) => ({
  type: INIT_LIST,
  list,
});

export const updateListItemQuantity = (index, quantity) => ({
  type: UPDATE_LIST_ITEM_QUANTITY,
  index,
  quantity,
});
