import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { store } from './store';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const eventSource = new EventSource('/api/subscribe');
eventSource.addEventListener('updateQuantity', ({ data }) => {
  console.log(JSON.parse(data));
});
