import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions/dialog';

export const dialogReducer = (state = {}, action) => {
  const { type, dialogType } = action;
  const { [dialogType]: dialog = {} } = state;

  switch (type) {
    case OPEN_DIALOG:
      return { ...state, [dialogType]: { ...dialog, open: true, params: action.params } };

    case CLOSE_DIALOG:
      return { ...state, [dialogType]: { ...dialog, open: false } };

    default:
      return state;
  }
};
