import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  
});

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
