import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import axios from 'axios'
import SearchBar from './SearchBar'
import Data from '../data/data'
import InteractiveGrids from './Table'
import App from '../Containers/App'

const style = {
    margin: 12,
  };

export default class PriceEstimate extends Component {

    componentDidMount() {
        axios.get('http://localhost:4200/api/prices')
        .then( res => {
            console.log(res)
            this.setState({
                prices: res.data
            })
        })
    }
    // added state in order to render search filter. When Textfield is empty the whole state will be displayed. As keys are entered the list reduces
    state = {
       prices: []
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
            this.setState({prices: Data})
        }
    }

    render() {
        {console.log(this.state)}
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