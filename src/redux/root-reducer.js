import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';

export default combineReducers ({
    user: userReducer
});