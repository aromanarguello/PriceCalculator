import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../../actions/Actions'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginComponent from './Login'
import RegisterComponent from './Register'

class LoginContainer extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        loggedIn: false
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        const { username, password, firstName, lastName, email } = this.state;
        if(username && password && firstName && lastName && email) {
            this.setState({ 
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                loggedIn: true 
            })
        }
    }
    render() {
        const register = this.handleSubmit()
        const change = this.handleChange

        return (
            <div id="login-container">
            {
                this.state.loggedIn === false 
                ? ( <LoginComponent />) 
                : (<RegisterComponent 
                    register={register}
                    change={change} />)
            }
            </div>
        )
    }
}


export default LoginContainer