import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../../actions/Actions'
import * as UserActions from '../../actions/UserActions'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginComponent from './Login'
import RegisterComponent from './Register'

class LoginContainer extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        loggedIn: false
    }

    render() {
        const { dispatch, total } = this.props;
        const registerUser = bindActionCreators(UserActions.userRegistration, dispatch)
        const userLogin = bindActionCreators(UserActions.userLogin, dispatch)
        return (
            <div id="login-container">
            {
                this.state.loggedIn === false ? ( <LoginComponent />) : (<RegisterComponent />)
            }
            </div>
        )
    }
}

function mapStateToProps(state, user) {
    return {
        state
    }
}

export default connect(mapStateToProps)(LoginContainer)