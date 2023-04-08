import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import store from './Store/Store';
import StoreContext from './Store/StoreContext'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

let render = () => {
  
  root.render(
      <StoreContext.Provider value={store}>
          <App />
      </StoreContext.Provider>
  );
}

store.subscribe(render)

render()
