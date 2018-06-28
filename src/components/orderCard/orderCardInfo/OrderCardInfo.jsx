import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { styles } from './OrderCardInfo.styles'
import { OrderModal } from '../../index'

class OrderCardInfo extends Component {

    cardDelayAnimation() {
    }

    render() {
        // Wait until fetched data from API has populated state
        if (!this.props.orders) {
            return ( 
                <h1>Loading...</h1>
            )
        } else {
            return (
                // if no '()' you don't return a React element
                // forEach do not return anything in JSX element 
                // use map to iterate and return a React element
                this.props.orders.map( (order, index) => (
                    <Paper elevation={5} style={styles.cardStyle} >
                    <Typography variant='button'>
                        <li key={index} style={styles.cardInfo}>
                            {console.log(order.patientName)}
                            <h3>Paciente: { order.patientName }</h3>
                            <p>
                                <b>Fecha de Orden:</b> 
                                <br/>
                                { moment.utc(order.createdAt).local().format('MMMM Do YYYY')}
                            </p>
                            {console.log('parent:', order)}
                            <OrderModal order={order} />
                        </li>
                    </Typography>
                </Paper>
        ))
    )}
}
};

OrderCardInfo.propTypes = {
    orders: PropTypes.array.isRequired
}

export default OrderCardInfo;