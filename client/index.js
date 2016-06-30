import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './modules/Todo/reducers'
import App from './modules/Todo/components/App'

let store = createStore(todoApp)

render(
   <AppContainer>
     <App  store={store}/>
   </AppContainer>,
   document.getElementById('app')
)
