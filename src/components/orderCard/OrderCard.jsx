import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import axios from 'axios';
import { styles } from './OrderCard.styles'
import { ProfileCard, OrderCardInfo } from '../index';
import * as actions from '../../actions/Actions'
import Infinite from 'react-infinite';
class OrderCard extends Component {
    constructor(props) {
        super(props)
        this.state = { prescription: []}
    }

    fetchOrders = async token => {
        const res = await axios.get('http://localhost:4200/ordenes', { headers: { 'authorization': token }})
        this.setState({
            prescription: res.data
        })
    }

    componentDidMount() {
        this.fetchOrders(this.props.auth)
    }

    render() {
        console.log(this.state.prescription)
        return (
            <div>
                <Paper style={styles.orderCard}id='orderCardContainer' >
                    <div id="profileCardContainer" style={styles.profileCard}>
                        <aside className='profileCardContainer'>
                            <ProfileCard />
                        </aside>
                    </div>
                    <div id='orders' >
                       <OrderCardInfo orders={this.state.prescription} />
                    </div>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.authenticated,
    }
}

export default connect(mapStateToProps, actions)(OrderCard)