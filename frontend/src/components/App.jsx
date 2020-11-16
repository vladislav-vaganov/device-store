import { Container, Typography } from '@material-ui/core';
import { AppHeaderContainer } from '../containers/appHeaderContainer';
import { DevicesListContainer } from '../containers/devicesListContainer';
import { ModalDialogContainer } from '../containers/modalDialogContainer';
import { DeviceDetailsContainer } from '../containers/deviceDetailsContainer';
import { DialogTypes } from '../constants';

export const App = () => (
  <Container maxWidth="md">
    <AppHeaderContainer />

    <DevicesListContainer />

    <ModalDialogContainer dialogType={DialogTypes.deviceDetails} Content={DeviceDetailsContainer} />

    <ModalDialogContainer
      dialogType={DialogTypes.changesNotification}
      Content={() => <Typography>{DialogTypes.changesNotification}</Typography>}
    />
  </Container>
);
