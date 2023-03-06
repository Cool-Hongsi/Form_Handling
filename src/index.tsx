import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'service/store';
import { worker } from 'service/mock/serviceWorker';
import GlobalStyle from 'Styled.GlobalStyle';
import 'react-datepicker/dist/react-datepicker.css';

worker.start();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
