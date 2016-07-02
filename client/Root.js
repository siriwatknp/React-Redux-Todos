import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import App from './modules/App/App'

const Root = ({store}) => (
   <Provider store={store}>
     <Router history={browserHistory}>
       <Route path="/(:filter)" component={App} />
     </Router>
   </Provider>
);

// add () to /(:filter) to show that filter is optional


export default Root