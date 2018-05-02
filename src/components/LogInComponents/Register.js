import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.props.register}>     
          <Typography component="p">

                  <TextField
                      id="first-name-input"
                      label="Primer Nombre"
                      className={classes.textField}
                      type="text"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.props.change}
                  />

            </Typography>
            <Typography component="p"> 
                  <TextField
                      id="last-name-input"
                      label="Apellido"
                      className={classes.textField}
                      type="text"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.props.change}
                  />

            </Typography>
          <Typography component="p">

                  <TextField
                      id="username-input"
                      label="Usuario"
                      className={classes.textField}
                      type="text"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.props.change}
                  />

            </Typography>
            <Typography component="p"> 
                  <TextField
                      id="email-input"
                      label="Correo Electronico"
                      className={classes.textField}
                      type="email"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.props.change}
                  />

            </Typography>
            <Typography component="p"> 
                  <TextField
                      id="password-input"
                      label="Contraseña"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.props.change}
                  />

            </Typography>
          </form>
        </CardContent>
        <CardActions>
          <Button color="primary" size="small">Registrese</Button>
          <Button size="small">Ayuda</Button>
        </CardActions>
      </Card>
    </div>
            
        );
    }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
};

export default withStyles(styles)(TextFields);
