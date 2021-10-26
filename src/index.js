import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/main.css";
import App from './App';

import { usePromiseTracker } from "react-promise-tracker";

 const LoadingIndicator = props => {
     const { promiseInProgress } = usePromiseTracker();

     return (
       promiseInProgress &&
      <div className="container text-center"><h1>News is coming...</h1></div>
    );
   }

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator />
  </React.StrictMode>,
  document.getElementById('root')
);
