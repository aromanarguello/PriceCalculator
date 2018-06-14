import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import * as actions from '../../actions/Actions';
import { Menu } from '../index'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends Component {
  renderButton() {
    if(this.props.auth) {
      return (
        <Button onClick={ () => this.props.changeAuth(false) }>Cerrar Sesion</Button>
      )
    } else {
      return (
        <Button onClick={ () => this.props.changeAuth(true) }>Iniciar Sesion</Button>
      )
    }
  }

  componentDidMount() {
    console.log(this.props.auth)
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
  console.log(state)
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(withStyles(styles)(ButtonAppBar));
