import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginComponent from './Login'
import RegisterComponent from './Register'

const LogIn = () => {
    return (
        <div id="login-container">
            <LoginComponent />
        </div>
    )
}
export default LogIn;