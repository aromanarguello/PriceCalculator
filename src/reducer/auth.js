// import * as actionTypes from '../actiontypes/ActionTypes'
import { CHANGE_AUTH } from '../actiontypes/ActionTypes'

export default function(state = true, action) {
    console.log(state)
    switch(action.type){
        case CHANGE_AUTH:
            return action.payload
        default: 
            return state;
    }
}