import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { buttonStyles, styles } from './SideExamList.styles'
import { createOrder, removeIndividualExams, dataCarry } from '../../actions/Actions'
import { CreateOrderButton } from '../index'
import Paper from '@material-ui/core/Paper';
class SideExamList extends Component {

    render() {
    const sum = this.props.state.reduce((sum, exam) => sum + exam.price, 0) 
    // names maps to produce each name on the side list when triggered by add price
    // removeIndividualExams removes the exam name and price by clicking on the 'X'
    const names = this.props.state.map((exam, index) =>
      <table className='sideListTable' key={index}>
        <tbody>
          <tr onClick={() => removeIndividualExams(index)}>{exam.name} - {exam.price}</tr>
        </tbody>
      </table>)

    return (
            <div className="side-exam-view">
                <Paper elevation={2} style={styles.paperCard}>
                    <h1> Carrito </h1>
                    <div className="side-total-amount">
                        { sum.toFixed(2) } $
                    </div>
                    { names }
                    <CreateOrderButton createOrder={this.props.createOrder} />
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      state
    };
  }

export default connect(
    mapStateToProps, { createOrder, removeIndividualExams, dataCarry 
    })(
        withStyles(buttonStyles)(SideExamList)
    )
