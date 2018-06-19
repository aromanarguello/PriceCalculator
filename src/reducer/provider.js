import * as actions from '../actiontypes/ActionTypes';

const INITIAL_STATE = {
    providerInfo: '',
}


export default function(state={}, action) {
    switch(action.type){
        case actions.FETCH_PROVIDER:
           return { ...state, providerInfo: action.payload }
        default:
            return state
    }
}