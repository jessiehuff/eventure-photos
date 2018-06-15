import React from 'react';
import { render } from 'react-dom'; 
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