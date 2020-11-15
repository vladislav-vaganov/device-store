export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const openDialog = (dialogType, params) => ({
  type: OPEN_DIALOG,
  dialogType,
  params,
});

export const closeDialog = (dialogType) => ({
  type: CLOSE_DIALOG,
  dialogType,
});
