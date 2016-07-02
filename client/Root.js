import React from 'react';
import {Provider} from 'react-redux';
import App from './modules/App/App'

const Root = ({store}) => (
   <Provider store={store}>
     <App />
   </Provider>
);


export default Root