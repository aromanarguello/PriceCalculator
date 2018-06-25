import React from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import { styles } from './OrderCardInfo.styles'

const OrderCardInfo = ({ orders }) => {
    // Wait until fetched data from API has populated state
    if (!orders) {
        return ( 
            <h1>Loading...</h1>
        )
    } else {
        return (
            // if no '()' you don't return a React element
            // forEach do not return anything in JSX element 
            // use map to iterate and return a React element
            orders.map( (order, index) => (
                <Paper elevation={5} style={styles.cardStyle} >
                    <li key={index} style={styles.cardInfo}>
                        {console.log(order.patientName)}
                        <h3>Paciente: { order.patientName }</h3>
                        <p>{ moment.utc(order.createdAt).local().format('MMMM Do YYYY')}</p>
                        <a href='/perfil'>Ver Orden</a>
                    </li>
                </Paper>
        ))
    )}
};

export default OrderCardInfo;