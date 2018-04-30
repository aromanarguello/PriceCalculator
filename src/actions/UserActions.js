import * as ActionTypes from '../actiontypes/ActionTypes'

export const userRegistration = user => {
    return {
        type: ActionTypes.REGISTER_USER,
    }
}

export const userLogin = user => {
    return {
        type: ActionTypes.USER_LOGIN
    }
}