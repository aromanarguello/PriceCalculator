import { combineReducers } from 'redux';
import ExamListReducers from './reducer';
import AuthReducer from './auth'

export default combineReducers({
    examList: ExamListReducers, 
    auth: AuthReducer
});