import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './modules/Todo/reducers'
import App from './modules/App/App'
import {loadState,saveState} from './localStorage'
import throttle from 'lodash/throttle';


const persistedState = loadState();
console.log(persistedState);

let store = createStore(todoApp,persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos:store.getState().todos
  });
},1000));

render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('app')
)
