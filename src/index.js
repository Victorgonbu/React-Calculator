import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/app.css';
import Routes from './routes/Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
