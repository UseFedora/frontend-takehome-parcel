import { combineReducers, createStore, applyMiddleware } from 'redux';
import search from './search/reducer';
import saved from './saved/reducer'; 
import thunk from 'redux-thunk';

export default () => {  
  return createStore(
    combineReducers({
      search,
      saved,
    }),
    applyMiddleware(thunk)
  );
};
