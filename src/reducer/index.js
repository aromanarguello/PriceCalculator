import { combineReducers } from 'redux';
import ExamListReducers from './reducer';

const rootReducer = combineReducers({
    examList: ExamListReducers
});

export default rootReducer;