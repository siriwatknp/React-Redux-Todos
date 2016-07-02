import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './modules/Todo/reducers'
import App from './modules/App/App'

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome Back!',
    completed: false
  }]
}

let store = createStore(todoApp,persistedState);


render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('app')
)
