import { combineReducers } from 'redux';
import ExamListReducers from './reducer';
import AuthReducer from './auth';
import ProviderReducer from './provider'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    examList: ExamListReducers, 
    auth: AuthReducer,
    form: formReducer,
    provider: ProviderReducer
});