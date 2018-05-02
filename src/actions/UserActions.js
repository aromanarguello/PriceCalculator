import * as ActionTypes from '../actiontypes/ActionTypes'

export const userRegistration = (username, password, firstName, lastName, email) => {
    return {
        type: ActionTypes.REGISTER_USER,
        username: username,
        password: password,
        firstName: firstName,
        email: email
    }
}

export const userLogin = user => {
    return {
        type: ActionTypes.USER_LOGIN
    }
}