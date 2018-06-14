import React, { Component } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom'

class SimpleMenu extends Component {
    constructor(props) {
        super(props)
    }
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><NavLink className="links" to="/">Inicio</NavLink></MenuItem>
          <MenuItem onClick={this.handleClose}><NavLink className="links" to="/examenes">Principal</NavLink></MenuItem>
          {/* <MenuItem onClick={this.handleClose}><NavLink className="links" to="/">Examenes</NavLink></MenuItem> */}
          <MenuItem onClick={this.handleClose}><NavLink className="links" to="/perfil">Perfil</NavLink></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
