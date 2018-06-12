import * as ActionTypes from '../actiontypes/ActionTypes'

export default function(state = false, action) {
    switch(action.type){
        case ActionTypes.CHANGE_AUTH:
            return action.payload
        default: 
            return state;
    }
}