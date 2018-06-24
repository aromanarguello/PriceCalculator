import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Menu } from '../index';
import { styles, customStyles } from './AppBar.styles'
import * as actions from '../../actions/Actions';

class ButtonAppBar extends Component {
  renderAuthButton() {
    if(this.props.auth) {
      return (
        <Button onClick={ () => this.handleSignout() } style={styles.authButton}>Cerrar Sesion</Button>
      )
    }
  }

  handleSignout() {
    this.props.signout()
    this.props.history.push('/signout')
  }

  render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
        <AppBar position="static" color="inherit" style={customStyles.card} >
          <Toolbar>
            <IconButton 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography 
                variant="title"
                color="primary"
                className={classes.flex}>
              Menu
            </Typography>
            {this.renderAuthButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  }
}
export default compose(
  connect(mapStateToProps, actions),
  withStyles(styles),
)(withRouter(ButtonAppBar))
