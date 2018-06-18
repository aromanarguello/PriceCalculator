import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { cardStyle } from './Authentication.styles';
import { LoginForm } from '../index';

class Authentication extends Component {
    render() {
        const { classes } = this.props
         return (
            <div style={cardStyle.container} >
                <Paper elevation={3}  style={cardStyle.card}>
                    <div id='loginFormContainer' style={cardStyle.loginContainer} >
                        <LoginForm />
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Authentication;