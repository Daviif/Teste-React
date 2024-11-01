import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import './styles/global.css'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Routes/> 
);

