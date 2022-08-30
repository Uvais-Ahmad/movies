import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore( movies );
console.log('Store : ',store);
console.log('Before State : ' ,store.getState());

// This dispact perform the action
store.dispatch({
  type: 'ADD_MOVIE',
  movies : [{name :'IRON_MAN 5'}]
});

console.log('After State : ' ,store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>  
);

