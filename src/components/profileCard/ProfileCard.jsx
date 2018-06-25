import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { styles } from './ProfileCard.styles'
import { Paper } from '@material-ui/core';
import { fetchProviderInfo } from '../../actions/Actions'
class ProfileCard extends Component {

    componentWillMount() {
       this.props.fetchProviderInfo(this.props.auth)
    }
    
    render() {
        return (
            <div style={ styles.profileCard } className="side-exam-view">
                <div id='profileImageContainer'>
                    <div style={styles.profileImageContainer}></div>
                    <h1>Welcome:</h1>
                    <h3>{this.props.provider.providerFirstName +' '+ this.props.provider.providerLastName}</h3>
                    <div style={styles.profileCardButtons} >
                        <button style={styles.directButtons}><NavLink to='/perfil/ordenes'>Ordenes Recientes</NavLink></button>
                        <button style={styles.directButtons}><NavLink to='/examenes'>Crear Orden</NavLink></button>
                        <button style={styles.directButtons}>Pacientes</button>
                        <button style={styles.directButtons}>Servicios</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        provider: state.provider,
        auth: state.auth.authenticated,
     }
}

export default connect(mapStateToProps, { fetchProviderInfo } )(ProfileCard);