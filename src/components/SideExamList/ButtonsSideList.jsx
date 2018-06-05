import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { buttonStyles, styles } from './SideExamList.styles'
import Delete from '@material-ui/icons/Delete';
import Ionicon from 'react-ionicons'



function CreateOrderButton(props) {
    const { classes } = props;
    return (
    <Button variant="contained" color="primary" className={classes.button} onClick={ props.createOrder}>
        Enviar
     <Ionicon icon='md-checkbox-outline' color='#ffff' fontSize='18px'/>
    </Button>
    )
}

CreateOrderButton.propTypes = {
    classes: PropTypes.object.isRequired,
    createOrder: PropTypes.func.isRequired
}

export default withStyles(buttonStyles)(CreateOrderButton)