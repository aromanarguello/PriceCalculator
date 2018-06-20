import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions/Actions';

class LoginForm extends Component {
    onSubmit = formProps => {
        this.props.login(formProps, () => {
            this.props.history.push('/perfil')
        })  
    }
    render(){
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} >
                    <Field
                        type='email'
                        name='email'
                        component='input'
                        autoComplete='none'
                        />
                    <Field
                        type='password'
                        name='password'
                        component='input'
                        autoComplete='none'
                        />
                        <h1>{this.props.errorMessage}</h1>
                    <button>Login</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'login'})
)(withRouter(LoginForm))