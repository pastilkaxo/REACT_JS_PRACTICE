import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClockBody } from './ClockBody';
import JobMenu from './Menu';





const cl = ReactDOM.createRoot(document.getElementById('cl'));
cl.render(
  <React.StrictMode>
    <ClockBody/>
  </React.StrictMode>
);

const menu = ReactDOM.createRoot(document.getElementById("menu"));
menu.render(
  <React.StrictMode>
    <JobMenu/>
  </React.StrictMode>
)

