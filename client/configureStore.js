import { createStore } from 'redux'
import todoApp from './modules/Todo/reducers'
import throttle from 'lodash/throttle';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if(!console.group){
    return rawDispatch;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state','color:grey',store.getState());
    console.log('%c action','color:blue',action);
    const returnValue = rawDispatch(action);
    console.log('%c next state','color:green',store.getState())
    console.groupEnd();
    return returnValue
  }
};

const configureStore = () => {
  const store = createStore(todoApp);

  if(process.env.NODE_ENV !== 'production'){
    store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(throttle(() => {
    saveState({
      todos:store.getState().todos
    });
  },1000));
  
  return store
}

export default configureStore