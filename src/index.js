import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AdvertProvider } from "./providers/advert.provider";


ReactDOM.render(
  <React.StrictMode>
    <AdvertProvider>
      <App />
    </AdvertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


