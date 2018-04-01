import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'

const LogIn = () => {
    return (
        <div id="login-container">
            <Login />
        </div>
    )
}
export default LogIn;