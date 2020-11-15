export const INIT_LIST = 'INIT_LIST';

export const initList = (list = []) => ({
  type: INIT_LIST,
  list,
});
