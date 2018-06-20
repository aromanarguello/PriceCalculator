import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { clearTotal } from '../../actions/Actions'
import { withStyles } from '@material-ui/core/styles';
import { buttonStyles } from './SideExamList.styles'
import Ionicon from 'react-ionicons'
import { connect } from 'react-redux';
import axios from 'axios';

class CreateOrderButton extends Component {
            
        async onSubmit () {
            console.log(this.props.examList)
            const body = {
                physicianName: 'Alejandro',
                patientName: 'Alex',
                order: this.props.examList
            }
            const request = await axios.post('http://localhost:4200/api/ordenes', body)
            return request;
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

export default connect(mapStateToProps, { clearTotal })(withStyles(buttonStyles)(CreateOrderButton));