import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { Menu } from '../index';
import { styles } from './AppBar.styles'
import * as actions from '../../actions/Actions';


class ButtonAppBar extends Component {
  renderButton() {
    if(this.props.auth) {
      return (
        <Button onClick={ () => this.props.changeAuth(false) } style={styles.authButton} >Cerrar Sesion</Button>
      )
    } else {
      return (
        <Button onClick={ () => this.props.changeAuth(true) } style={styles.authButton} >Iniciar Sesion</Button>
      )
    }
  }

  render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
            </IconButton>
            <Menu />
            <Typography variant="title" color="primary" className={classes.flex}>
              Menu
            </Typography>
            {this.renderButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(withStyles(styles)(ButtonAppBar));
