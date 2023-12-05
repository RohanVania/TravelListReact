import { legacy_createStore as createStore} from 'redux'
import { combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import FormReducer from './reducers/FormReducer';
import FormSlice from "./reducers/FormSlice";

const rootReducer=combineReducers({
    items:FormReducer,
    singleItem:FormSlice
})
const enhancer=()=>{

    console.log("HHHUEHUUHU")
}

const print1 = (store) => (next) => (action) => {
    console.log('1');
    return next(action);
  };
  
  const print2 = (store) => (next) => (action) => {
    console.log('2');
    return next(action);
  };
  const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(print1, print2)
    // other store enhancers if any
  )

const store=createStore(rootReducer,composedEnhancer);

store.dispatch()

export default store;




