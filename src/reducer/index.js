import { combineReducers } from 'redux';
import ExamListReducers from './reducer';
import AuthReducer from './reducer'

const rootReducer = combineReducers({
    examList: ExamListReducers, 
    auth: AuthReducer
});

export default rootReducer;