import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {  StateProvider } from './Data/StateProvider';
import { intialState, reducer } from './Data/reducer';

ReactDOM.render(
  <React.StrictMode>
   <StateProvider intialState={intialState} reducer={reducer}>
   <App />
   </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
