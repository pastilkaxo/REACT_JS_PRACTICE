import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentInfo from './StudentInfo';
import Notes from './Notes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <StudentInfo />
    <Notes/>
    </div>
  </React.StrictMode>
);

