import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
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
            <form >
            <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit.bind(this)}>
                    Enviar
                <Ionicon icon='md-checkbox-outline' color='#ffff' fontSize='18px'/>
            </Button>
        </form>
    )
}
}

CreateOrderButton.propTypes = {
    classes: PropTypes.object.isRequired,
    createOrder: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    console.log(state)
    return {
        examList: state.examList
    }
}

export default connect(mapStateToProps)(withStyles(buttonStyles)(CreateOrderButton));