import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';

import FormReducer from './reducers/FormReducer';
import FormSlice from "./reducers/FormSlice";

const rootReducer=combineReducers({
    items:FormReducer,
    singleItem:FormSlice
})

const store=createStore(rootReducer);



export default store;




