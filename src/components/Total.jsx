import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Total = props => {
    return (
        <div>
            {props.total.toFixed(2)}
        </div>
            
    )
}

export default Total;