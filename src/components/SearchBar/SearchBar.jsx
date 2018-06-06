import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import * as ActionCreators from '../../actions/Actions'

const style = {
    width: 990,
}

export default class SearchBar extends Component {
    
    static propTypes = {
        matchTerms: PropTypes.func.isRequired
    }
   
    render() {
        return (
            <TextField 
                placeholder="Busque su examen aqui" 
                onChange={this.props.matchTerms} className="search-bar"
                style={style} />
        )
    }
}