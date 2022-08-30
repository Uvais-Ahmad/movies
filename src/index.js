import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react';
// import  store  from './store';
import './index.css';
import App from './components/App';
// import movies from './reducers';

// const store = createStore(movies);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>  

  // Now using React redux
  // <>
  //   <Provider store = {store} >
  //     <App />
  //   </Provider>
  // </>
);

