import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../../actions/Actions';
import { Button } from '@material-ui/core/';
import ExamContainer from '../../Containers/ExamContainer';
import { styles } from './Clear.style';

const Clear = props => {
        return (
            <div className="clear-btn">        
                <Button             
                    color="primary"
                    variant="raised"
                    style={styles.button}
                    onClick={props.clearTotal}
                    >
                    Limpiar
                </Button>
            </div>
        );
    }

export default Clear;