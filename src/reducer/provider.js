import * as actions from '../actiontypes/ActionTypes';

export default function(state={}, action) {
    switch(action.type){
        case actions.FETCH_PROVIDER:
           return { 
               ...state, 
               providerFirstName: action.payload.providerFirstName, 
               providerLastName: action.payload.providerLastName,
               providerEmai: action.payload.providerEmail,
               providerId: action.payload.providerId
            }
        case actions.FETCH_ORDER:
            return {
                ...state, 
                order: action.payload
            }
        default:
            return state
    }
}