
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Authentication } from '../components/index';

class AuthContainer extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Authentication />
            </div>
        )
    }
}

export default connect(null)(AuthContainer)