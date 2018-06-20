import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Actions'

class OrderCard extends Component {
    componentWillMount() {
        this.props.fetchOrder()
        console.log('order', this.props.order)        
    }

    render() {
        return (
            <h1>OrderCard Component</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        order: state.provider
    }
}

export default connect(mapStateToProps, actions)(OrderCard)