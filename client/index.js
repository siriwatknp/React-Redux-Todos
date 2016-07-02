import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './modules/Todo/reducers'
import App from './modules/App/App'

let store = createStore(todoApp)

render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('app')
)
