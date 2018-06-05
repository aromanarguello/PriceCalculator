import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles } from './Login.styles';

class TextFields extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
      <Card className={classes.card}>
        <CardContent>
        <Typography component="p">
          <form className={classes.container} noValidate autoComplete="off">
            
            <TextField
                id="username-input"
                label="usuario"
                className={classes.textField}
                type="text"
                autoComplete="current-password"
                margin="normal"
            />
        </form>
          </Typography>
          <Typography component="p">
          <form className={classes.container} noValidate autoComplete="off">
            
            <TextField
                id="password-input"
                label="contraseña"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
            />
        </form>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><NavLink to="/registrarse" className="links" >Registrarse</NavLink></Button>
          <Button size="small">Ayuda</Button>
        </CardActions>
      </Card>
    </div>
            
        );
    }
}

TextFields.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
