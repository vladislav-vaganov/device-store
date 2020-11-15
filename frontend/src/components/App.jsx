import { Container, Typography } from '@material-ui/core';
import { AppHeader } from './AppHeader';
import { DevicesListContainer } from '../containers/devicesListContainer';
import { ModalDialogContainer } from '../containers/modalDialogContainer';
import { DialogTypes } from '../constants';

export const App = () => (
  <Container maxWidth="md">
    <AppHeader />

    <DevicesListContainer />

    <ModalDialogContainer
      dialogType={DialogTypes.itemDetails}
      Content={({ id, index }) => (
        <Typography>
          {DialogTypes.itemDetails} {id} {index}
        </Typography>
      )}
    />

    <ModalDialogContainer
      dialogType={DialogTypes.changesNotification}
      Content={() => <Typography>{DialogTypes.changesNotification}</Typography>}
    />
  </Container>
);
