import { combineReducers } from 'redux';

//REDUCERS
import authReducer from './authReducer';
import userInfoReducer from './userInfoReducer';

export default combineReducers({
    authReducer: authReducer,
    userInfoReducer: userInfoReducer,

})