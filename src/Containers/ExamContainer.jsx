import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions/Actions'
import '../App.css';
import Logo from '../SmallLogo.png'
import { Clear, SideExamList, Total, AppBar, PriceEstimate } from '../components/index'
import requireAuth from '../components/requireAuth/requireAuth'

class App extends Component {
  render() {
    const { dispatch } = this.props;
    const clearTotal = bindActionCreators(ActionCreators.clearTotal, dispatch)

    // sum adds each exam through reduce to produce a total
    const sum = this.props.data.reduce((sum, exam) => sum + exam.price, 0)

    return (
      
        <div className="App">
          <div id="app-bar-container">
          </div>
          <div id="side-exam-list-container">
            <aside>
              <SideExamList />
            </aside>
          </div>
          <div className="header-container">
            <img src={Logo} alt="logo" id="logo" />
            <div className='price-container'>
              {/* displays the total sum of added prices */}
              <Total total={sum} />
            </div>
            <Clear clearTotal={clearTotal} />
          </div>
          <div className="main-container">
            <PriceEstimate />
          </div>
        </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    data: state.examList,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(requireAuth(App))