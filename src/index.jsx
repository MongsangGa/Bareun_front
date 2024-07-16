import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Education from './Education';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
