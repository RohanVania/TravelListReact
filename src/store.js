import { legacy_createStore as createStore} from 'redux'
import FormReducer from './reducers/FormReducer';

const store=createStore(FormReducer);

export default store;




