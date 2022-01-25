import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Style from "./index.module.css"

ReactDOM.render(
  <div className={Style.Container}>

    <App />

  </div>,
  document.getElementById('root')
);

