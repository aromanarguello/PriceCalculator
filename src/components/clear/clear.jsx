import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../../actions/Actions';
import Button from '@material-ui/core/Button';
import ExamContainer from '../../Containers/ExamContainer'


const style = {
    margin: 12,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
};

const Clear = props => {
        return (
            <div className="clear-btn">        
                <Button             
                    color="primary"
                    variant="raised"
                    style={style}
                    onClick={props.clearTotal}
                    >
                    Limpiar
                </Button>
            </div>
        );
    }

export default Clear;