import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//이거는 무엇일까..? 일단 콘솔에 오류나는거 보니 그냥 코멘트아웃하도록
//ServiceWorker.unregister();