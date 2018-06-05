import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { buttonStyles, styles } from './SideExamList.styles'
import { createOrder } from '../../actions/Actions'
import Paper from '@material-ui/core/Paper';
import CreateOrderButton from './ButtonsSideList'
import CreateOrderbutton from './ButtonsSideList'

class ExamList extends Component {
    render() {
    const { classes } = this.props;
    return (
            <div className="side-exam-view">
                <Paper elevation={2} style={styles.paperCard}>
                    <h1> Carrito </h1>
                    <div className="side-total-amount">
                        { this.props.total.toFixed(2) } $
                    </div>
                    { this.props.dataCarryName }
                    <CreateOrderbutton createOrder={this.props.createOrder}/>
                </Paper>
            </div>
        );
    }
}

export default connect(
    null, { createOrder 
    })(
        withStyles(buttonStyles)(ExamList)
    )
