import React from 'react';
import { render } from 'react-dom'; 
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import reducers from './reducers'; 
import store from './configureStore'; 
import {Provider} from 'react-redux'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.getElementById('root')
)