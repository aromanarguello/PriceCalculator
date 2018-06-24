import * as actions from '../actiontypes/ActionTypes';

export default function(state=[], action) {
    switch(action.type){
        case actions.FETCH_PROVIDER:
           return { 
               ...state, 
               providerFirstName: action.payload.providerFirstName, 
               providerLastName: action.payload.providerLastName,
               providerEmai: action.payload.email,
            //    fetched: true
            }
        case actions.FETCH_ORDER:
            return {
                ...state,
                order: action.payload,
                fetched: true
            }
        default:
            return state
    }
}