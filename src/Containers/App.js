import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import * as ActionCreators from '../actions/Actions'
import '../App.css';
import '../SmallLogo.png'
import Ionicon from 'react-ionicons'
import PriceEstimate from '../components/PriceEstimate'
import Clear from '../components/Clear'
import ExamList from '../components/ExamList'
import Total from '../components/Total'
import AppBar from '../components/AppBarComponents/AppBar'
import LoginContainer from '../components/LogInComponents/LoginContainer'
import Data from '../data/data'


class App extends Component {

  render() {
    const { dispatch, total } = this.props;
    const updateEstimator = bindActionCreators(ActionCreators.updateEstimator, dispatch);
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch);
    const dataCarryName = bindActionCreators(ActionCreators.dataCarry, dispatch);
    const addPrices = bindActionCreators(ActionCreators.addPrices, dispatch);
    const removeExams = bindActionCreators(ActionCreators.removeExams, dispatch)
    const removeIndividualExams = bindActionCreators(ActionCreators.removeIndividualExams, dispatch)

    const style = {
      marginLeft: 12,
    }

    // sum adds each exam through reduce to produce a total
    const sum = this.props.state.reduce((sum, exam) => sum + exam.price, 0)
    // names maps to produce each name on the side list when triggered by add price
    // removeIndividualExams removes the exam name and price by clicking on the 'X'
    const names = this.props.state.map((exam, index) =>
      <table className="btn-delete-examlist-container" key={index}>
        <tr>{exam.name} - {exam.price}</tr>
        <tr className="icon-delete-examlist">
          <Ionicon
            icon="ios-remove-circle"
            fontSize="18px"
            color="red"
            onClick={() => removeIndividualExams(index)} style={style} />
        </tr>
      </table>)

    const priceComponent = <PriceEstimate addPrices={addPrices} />

    const clearComponent = <Clear clearTotal={clearTotal} />

    const examListComponent =
      <ExamList
        dataCarryName={names}
        removeExams={removeExams}
        total={sum}
      />

    const totalComponent = <Total total={sum} />

    const loginComponent = <LoginContainer />

    const appBar = <AppBar />
    return (
      <BrowserRouter>
        <div className="App">
          <div id="app-bar-container">
            {appBar}
          </div>
          <div id="side-exam-list-container">
            <aside>
              {examListComponent}
            </aside>
          </div>
          <div className="header-container">
            <img src={require('../SmallLogo.png')} alt="logo" id="logo" />
            <div className='price-container'>
              {/* displays the total sum of added prices */}
              <Route path="/examenes" render={() => totalComponent} />
            </div>
            <Route path="/examenes" render={() => clearComponent} />
          </div>
          <div className="main-container">
            {/* Component that displays list of exams */}
            <Route path="/examenes" render={() => priceComponent} />
            <Route path="/" render={() => loginComponent } />
          </div>
        </div>
      </BrowserRouter>
    );
  };
}

function mapStateToProps(state, name) {
  return {
    state
  };
}

export default connect(mapStateToProps)(App)