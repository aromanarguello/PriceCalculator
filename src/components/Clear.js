import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/Actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import App from '../Containers/App'


const style = {
    margin: 12,
};

const Clear = props => {
        return (
            <MuiThemeProvider>
            <div className="clear-btn">        
                <Button 
                    // backgroundColor="#234082"                
                    title="Limpiar" 
                    // labelColor="white"
                    // primary={false} 
                    variant="raised"
                    style={style}
                    onClick={props.clearTotal}
                    />
            </div>
            </MuiThemeProvider>
        );
    }

export default Clear;