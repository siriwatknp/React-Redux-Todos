import { createStore } from 'redux'
import todoApp from './modules/Todo/reducers'

const logger = (store) => (next) => {
  if(!console.group){
    return next;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state','color:grey',store.getState());
    console.log('%c action','color:blue',action);
    const returnValue = next(action);
    console.log('%c next state','color:green',store.getState())
    console.groupEnd();
    return returnValue
  }
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => (
     store.dispatch = middleware(store)(store.dispatch)
  ))
};

const promise = (store) => (next) => (action) => {
  if(typeof action.then === 'function'){
    return action.then(next);
  }
  return next(action);
};

const configureStore = () => {
  const store = createStore(todoApp);
  const middlewares = [promise];

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store,middlewares);

  return store
};

export default configureStore