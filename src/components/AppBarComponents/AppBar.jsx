import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import MenuComponent from './Menu'
import * as actions from '../../actions/Actions'

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
        <button onClick={ () => this.props.changeAuth(true) }>Cerrar Sesion</button>
      )
    } else {
      return (
        <button onClick={ () => this.props.changeAuth(false) }>Iniciar Sesion</button>
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
            <MenuComponent />
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
