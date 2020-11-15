import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

export const ModalDialog = ({ open = false, handleClose, Content, params = {} }) => (
  <Dialog onClose={handleClose} open={open} scroll="paper" fullWidth maxWidth="sm">
    <DialogContent dividers>
      <Content {...params} />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
