import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

    class requireAuth extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }
        
        componentWillUpdate() {
            this.shouldNavigateAway();
        }
        
        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }
        render() {
            return (
                <ChildComponent {...this.props } />
            )
        }
    }
    
    function mapStateToProps(state) {
        return { auth: state.auth.authenticated }
    }
    
    return connect(mapStateToProps)(requireAuth)
}