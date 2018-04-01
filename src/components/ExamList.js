import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import * as ActionCreators from '../actions/Actions'


const ExamList = props => {
    return (
        <div className="side-exam-view">
            <Paper zDepth={2}>
                <h1> Carrito </h1>
                <div className="side-total-amount">
                    { props.total.toFixed(2) } $
                </div>
                { props.dataCarryName }
            </Paper>
        </div>
    );
}
export default ExamList;
