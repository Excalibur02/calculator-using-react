import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {Calculator} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const [display, setDisplay ] = React.useState(1);
root.render(
  <React.StrictMode>
    <div className="app-container"><Calculator/></div>
  </React.StrictMode>
);
