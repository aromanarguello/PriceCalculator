import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import axios from 'axios';
import { styles } from './OrderCard.styles'
import { ProfileCard } from '../index';
import * as actions from '../../actions/Actions'
class OrderCard extends Component {
    constructor(props) {
        super(props)
        this.state = { prescription: []}
    }

    fetchOrders = async () => {
        const res = await axios.get('http://localhost:4200/ordenes')
        this.setState({
            prescription: res.data
        })
    }

    componentDidMount() {
        this.fetchOrders()
    }

    renderOrder() {
        if (this.state.prescription.length === 0 ) {
            return ( 
                <h1>Loading...</h1>
            )
        } else {
            return (
                this.state.prescription.map( x => (
                    <Paper>
                        <li>
                            {console.log(x.patientName)}
                            <h1>{ x.patientName }</h1>
                        </li>
                    </Paper>
            ))
        )}
    }

    render() {
        console.log(this.state.prescription)
        return (
            <div >
                <Paper style={styles.orderCard}id='orderCardContainer' >
                    <div id="profileCardContainer" style={styles.profileCard}>
                        <aside className='profileCardContainer'>
                            <ProfileCard />
                        </aside>
                    </div>
                    <div id='orders' >
                        { this.renderOrder() }
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