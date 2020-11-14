import { Container } from '@material-ui/core';
import { AppHeader } from './AppHeader';
import { DevicesList } from './DevicesList';

export const App = () => {
  return (
    <div className="App">
      <AppHeader />

      <Container maxWidth="md">
        <DevicesList />
      </Container>
    </div>
  );
};
