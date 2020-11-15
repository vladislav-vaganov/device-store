import { Container } from '@material-ui/core';
import { AppHeader } from './AppHeader';
import { DevicesListContainer } from '../containers/devicesListContainer';

export const App = () => (
  <Container maxWidth="md">
    <AppHeader />

    <DevicesListContainer />
  </Container>
);
