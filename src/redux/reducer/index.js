import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import counterReducer from './counter';

const allReducers = combineReducers({
    
    counterReducer,
    apiReducer
})
export default allReducers;