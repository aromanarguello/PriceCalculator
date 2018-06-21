import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { styles } from './OrderCard.styles'
import * as actions from '../../actions/Actions'
class OrderCard extends Component {
    componentWillMount() {
        const token = localStorage.getItem('jwt');
        this.props.fetchOrder(token)
    }

    
    render() {
        // const orders = this.props.order.forEach( x => {
        //     console.log(x)
        // })

        {console.log(this.props.order)}
        return (
            <div id='orderCardContainer'>
                <Paper style={styles.orderCard}>
                    
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        order: state.provider
    }
}

export default connect(mapStateToProps, actions)(OrderCard)