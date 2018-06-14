import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { buttonStyles } from './SideExamList.styles'
import Ionicon from 'react-ionicons'



function CreateOrderButton(props) {
        
    function onSubmit(values) {
        this.props.createOrder(values, () => {
            this.props.history.push('/')
        })
    }

    const { classes } = props;
    return (
        <form onSubmit={onSubmit.bind(this)}>
            <Button variant="contained" color="primary" className={classes.button} onClick={props.createOrder}>
                    Enviar
                <Ionicon icon='md-checkbox-outline' color='#ffff' fontSize='18px'/>
            </Button>
        </form>
    )
}

CreateOrderButton.propTypes = {
    classes: PropTypes.object.isRequired,
    createOrder: PropTypes.func.isRequired,
}

export default withStyles(buttonStyles)(CreateOrderButton)