import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form_Example from './App1';
import Task_Manager from './Task_Mangar';
import Custom_Hooks from './Custom_Hooks';
import UseEffect_example from './UseEffect_Example';
import Home from './Home';
import UseEffect_example2 from './UseEffect_ex2';
import Router_Example from './Router_Example';
import WebApp from './web-design/WebApp';


ReactDOM.render(
  <React.StrictMode>

      <WebApp />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
