import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { styles } from './ProfileCard.styles'
import { Button } from '@material-ui/core';
import { fetchProviderInfo, signout } from '../../actions/Actions'
import { NavButtons } from '../index';
class ProfileCard extends Component {

    componentWillMount() {
       this.props.fetchProviderInfo(this.props.auth)
    }

    renderAuthButton() {
        if(this.props.auth) {
            return (
            <Button onClick={ () => this.handleSignout() } style={styles.authButton}>
                Cerrar Sesion
            </Button>
            )
        }
    }

    handleSignout() {
        this.props.signout()
        this.props.history.push('/signout')
    }
    
    render() {
        return (
            <div style={ styles.profileCard } className="side-exam-view">
                <div id='profileImageContainer'>
                    <div style={styles.profileImageContainer}></div>
                    <h1>Welcome:</h1>
                    <h3>{this.props.provider.providerFirstName +' '+ this.props.provider.providerLastName}</h3>
                    <div style={styles.profileCardButtons} >
                        <NavButtons />
                        { this.renderAuthButton() }
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

export default connect(mapStateToProps, { fetchProviderInfo, signout } )(withRouter(ProfileCard));