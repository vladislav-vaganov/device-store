import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

export const ModalDialog = ({ open = false, handleClose, title, Content, params = {} }) => (
  <Dialog onClose={handleClose} open={open} scroll="paper" fullWidth maxWidth="sm">
    {title && <DialogTitle>{title}</DialogTitle>}
    <DialogContent>
      <Content {...params} />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
