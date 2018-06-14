
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from '../components/index';

class AuthContainer extends Component {
    render() {
        return (
            <AppBar />
        )
    }
}

export default connect(null)(AuthContainer)