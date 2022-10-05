import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';

//Components
import AppWrapper from './AppWrapper';

const root = ReactDOM.createRoot(document.getElementById('root')); // Redux Store

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
