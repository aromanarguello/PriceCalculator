import * as ActionTypes from '../actiontypes/ActionTypes'
import { AUTH_USER } from '../actiontypes/ActionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:4200';

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
        payload: state.Examlist
    }
 }

 export function changeAuth(isLoggedIn) {
    return { 
        type: ActionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
 }

 export const login = formProps => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/ingresar`, formProps)
    console.log(response.data.token)
    dispatch({ type: AUTH_USER, payload: response.data.token })
 }