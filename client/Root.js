import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import App from './modules/App/App'

const Root = ({store}) => (
   <Provider store={store}>
     <Router history={browserHistory}>
       <Route path="/" component={App} />
     </Router>
   </Provider>
);


export default Root