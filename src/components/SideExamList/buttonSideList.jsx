import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from '@material-ui/core';
import { clearTotal, createOrder } from '../../actions/Actions'
import { withStyles } from '@material-ui/core/styles';
import { buttonStyles } from './SideExamList.styles'
import Ionicon from 'react-ionicons'

class CreateOrderButton extends Component {
            
        onSubmit = formProps => {
            const body = {
                physicianName: 'Alejandro',
                patientName: 'Alex',
                order: this.props.examList
            }
            const token = localStorage.getItem('jwt')
            this.props.createOrder(token, formProps, body)
        }
        render () {
            const { classes } = this.props;
            return (
                <form onClick={this.props.clearTotal}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit.bind(this)}>
                        Enviar
                    <Ionicon icon='md-checkbox-outline' color='#ffff' fontSize='18px'/>
                </Button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        examList: state.examList
    }
}

export default compose(
    connect(mapStateToProps, { clearTotal, createOrder }),
    withStyles(buttonStyles)    
)(CreateOrderButton)