import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Paper, FormControl, withStyles, InputLabel, Input, InputAdornment } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { styles, cardStyle } from './Authentication.styles';
import * as actions from '../../actions/Actions'
class Authentication extends Component {

    onsubmit = (formProps) => {
        this.props.login(formProps)
    }
    
    render() {
        const { classes } = this.props
        const { handleSubmit } = this.props
         return (
            <div style={cardStyle.container} >
                <Paper className={classes.root} elevation={3}  style={cardStyle.card}>
                <div id='loginFormContainer' style={cardStyle.loginContainer} >
                    <form onSubmit={handleSubmit(this.onsubmit)} >
                        <FormControl className={classes.margin}>
                                <Input
                                    type='email'
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    />
                                <Input
                                    type='password'
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    }
                                    />
                                <button>Login</button>
                            </FormControl>
                    </form>
                </div>
                </Paper>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'login' }),
    withStyles(styles)
)(Authentication);