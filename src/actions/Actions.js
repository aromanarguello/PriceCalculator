import * as ActionTypes from '../actiontypes/ActionTypes'
import { AUTH_USER, AUTH_ERROR, FETCH_PROVIDER } from '../actiontypes/ActionTypes';
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

 export const fetchProviderInfo = token => async dispatch => {
     try {
         const response = await axios.get(`${ROOT_URL}/usuario`, { headers: { 'authorization': token }} )
         console.log(response.data)
         dispatch({ type: FETCH_PROVIDER, payload: response.data }) 
     } catch (error) {
        throw new Error(error)
     }
 }

 export function changeAuth(isLoggedIn) {
    return { 
        type: ActionTypes.CHANGE_AUTH,
        payload: ''
    }
 }

 export const login = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(`${ROOT_URL}/ingresar`, formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        callback();
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: 'El correo/contraseña no existen'})
    }
}