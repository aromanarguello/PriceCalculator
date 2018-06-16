import * as ActionTypes from '../actiontypes/ActionTypes';
import axios from 'axios';
const ROOT_URL = 'http://localhost:4200/api/';

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
    const body = {
            physicianName: 'Alejandro Roman',
            patientName: 'Alejandro Arguello',
            order: [state.Examlist]
    }
    const createOrder = axios.post(`${ROOT_URL}/ordenes`, body)
    return {
        type: ActionTypes.CREATE_ORDER,
        payload: createOrder
    }
 }

 export function changeAuth(isLoggedIn) {
    return { 
        type: ActionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
 }