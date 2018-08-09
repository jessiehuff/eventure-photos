import React from 'react';
import { render } from 'react-dom'; 
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import reducers from './reducers'; 
import {Provider} from 'react-redux'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle'; 

const persistedState = loadState(); 
const store = createStore(reducers, persistedState, compose(
  applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(throttle(() => {
  saveState({
    events: store.getState().events 
  }); 
}, 1000)); 

render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.getElementById('root')
)