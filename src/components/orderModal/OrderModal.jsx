import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Modal, Button } from '@material-ui/core';
import { styles, modalContentStyles } from './OrderModal.styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class OrderModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen}>Ver Ordén</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography
              style={modalContentStyles.modalHeader} 
              variant="title" 
              id="modal-title">
              Orden: 
            </Typography>
            <Typography
              style={modalContentStyles.modalContainer}
              variant="button" 
              id="simple-modal-description">
              {this.props.order.order.map(x => (
                  <li>
                    {x.name}
                  </li>
              ))}
            </Typography>
            {/* <SimpleModalWrapped /> */}
          </div>
        </Modal>
      </div>
    );
  }
}

OrderModal.propTypes = {
  classes: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(OrderModal);

export default SimpleModalWrapped;