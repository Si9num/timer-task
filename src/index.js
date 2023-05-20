import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

(function fullStor(){
  sessionStorage.setItem('res',JSON.stringify({h:"SUCCESS!",p:`You have successfully subscribed to the email newsletter`}))
})()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


