
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, SignUp } from '../components/index';

class AuthContainer extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <SignUp />
            </div>
        )
    }
}

export default connect(null)(AuthContainer)