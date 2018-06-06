import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addPrices } from '../../actions/Actions';
import { SearchBar, InteractiveGrids } from '../index'
import { connect } from 'react-redux';
import axios from 'axios'

const style = {
    margin: 12,
  };

class PriceEstimate extends Component {
    // added state in order to render search filter. When Textfield is empty the whole state will be displayed. As keys are entered the list reduces
    state = {
        prices: []
    }

    componentDidMount() {
        axios.get('http://localhost:4200/api/prices')
        .then( res => {
            this._data = res.data
            this.setState({
                prices: res.data
            })
        })
    }

    // imports the JSON object from data.js file and assisngs it to the variable price
    // Data is an array thus should be treated as like.
    static propTypes = {
        addPrices: PropTypes.func.isRequired,
    }
    // (e) takes the onchange input value from text field -> assigns it to nameTerm -> the state is filtered and nameTerm is used as a parameter to match the exam being filtered -> prices key is assigned the result of examNameFilter
    matchTerms = (e) => {
        const nameTerm = e.target.value
        if(nameTerm !== e) {
            // case insensitive
            const examNameFilter = this.state.prices.filter(exam => exam.name.toLowerCase().match(nameTerm.toLowerCase()))
            this.setState({prices: examNameFilter})
        }
        // re-renders the complete Data
        if(nameTerm === "") {
            this.setState({prices: this._data})
        }
    }

    render() {
        return ( 
            <div>
            <SearchBar matchTerms={this.matchTerms}/>
            <InteractiveGrids
              state={this.state} 
              addPrices={this.props.addPrices}/>     
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, { addPrices })(PriceEstimate)
