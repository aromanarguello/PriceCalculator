import React from 'react';
import { Button } from '@material-ui/core';
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