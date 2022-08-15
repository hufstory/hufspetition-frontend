import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//일단 쓸모없는거 같으니, 삭제(심지어 console창에도..)
//ServiceWorker.unregister();