import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import Table from './Table';
import Chess from './Chess';



const h = ReactDOM.createRoot(document.getElementById("hello"));
h.render(
  <React.StrictMode>
    <Hello/>
  </React.StrictMode>
)

const t = ReactDOM.createRoot(document.getElementById("table"));
t.render(
  <React.StrictMode>
    <Table/>
  </React.StrictMode>
)

const c = ReactDOM.createRoot(document.getElementById("chess"));
c.render(
  <React.StrictMode>
    <Chess/>
  </React.StrictMode>
)
