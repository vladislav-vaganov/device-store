import { Container } from '@material-ui/core';
import { AppHeader } from './AppHeader';
import { DevicesListContainer } from '../containers/devicesListContainer';

export const App = () => {
  return (
    <div className="App">
      <AppHeader />

      <Container maxWidth="sm">
        <DevicesListContainer />
      </Container>
    </div>
  );
};
