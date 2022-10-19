import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieContext from './MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieContext>
      <App />
    </MovieContext>
  </React.StrictMode>
);

