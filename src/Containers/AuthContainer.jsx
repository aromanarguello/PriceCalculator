
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Authentication } from '../components/index';

class AuthContainer extends Component {
    render() {
        return (
            <div>
                <Authentication />
            </div>
        )
    }
}

export default connect(null)(AuthContainer)