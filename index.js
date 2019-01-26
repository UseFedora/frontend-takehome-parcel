import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { loadSaved } from './src/store/saved/actions';  
import App from './src/App';
import './index.css';

const store = configureStore();
store.dispatch(loadSaved());  

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
