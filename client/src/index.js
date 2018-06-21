import React from 'react';
import { render } from 'react-dom'; 
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import reducers from './reducers'; 
import {Provider} from 'react-redux'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const store = createStore(reducers, compose(
  applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.getElementById('root')
)