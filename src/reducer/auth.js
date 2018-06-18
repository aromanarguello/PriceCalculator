// import * as actionTypes from '../actiontypes/ActionTypes'
import * as ActionTypes from '../actiontypes/ActionTypes'

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}
export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case ActionTypes.CHANGE_AUTH:
            return { ...state, authenticated: action.payload }
        default: 
            return state;
    }
}