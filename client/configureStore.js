import {createStore} from 'redux';
import todoApp from './modules/Todo/reducers/index';

export function configureStore(initialState = {}){
  const store = createStore(todoApp,initialState);
  
  return store
}
