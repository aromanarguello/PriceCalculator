import * as ActionTypes from '../actiontypes/ActionTypes'

export const updateEstimator = total => {
    return {
        type: ActionTypes.UPDATE_ESTIMATOR,
    }
}

export const clearTotal = price => {
    return {
        type: ActionTypes.CLEAR_TOTAL,
        price
    }
}

export const dataCarry = name => {
    return {
        type: ActionTypes.DATA_NAME,
        name
    }
}

export const addPrices = (price, name, index) => {
    return{
        type: ActionTypes.ADD_PRICES,
        price,
        name,
        index
    }
}

export const removeExams = state => {
    return {
        type: ActionTypes.REMOVE_EXAMS,
        state
    }
}

export const removeIndividualExams = index => {
    return {
        type: ActionTypes.REMOVE_INDVIDUAL_EXAM,
        index
    }
}

export const createOrder = (state) => {
    // const request = axios.post('', values).then( () => callback())
    return {
        type: ActionTypes.CREATE_ORDER,
        payload: state
    }
 }

 export const changeAuth = isLoggedIn => {
     console.log(isLoggedIn)
    return { 
        type: ActionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
 }