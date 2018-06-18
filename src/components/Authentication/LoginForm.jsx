import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions/Actions';

class LoginForm extends Component {
    onSubmit = formProps => {
        this.props.login(formProps)
    }
    render(){
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} >
                <fieldset>
                    <Field
                        type='email'
                        name='email'
                        component='input'
                        autoComplete='none'
                        />
                </fieldset>
                <fieldset>
                    <Field
                        type='password'
                        name='password'
                        component='input'
                        autoComplete='none'
                        />
                </fieldset>
                    <button>Login</button>
            </form>
        )
    }
}

export default compose(
    reduxForm({ form: 'login'}),
    connect(null, actions)
)(LoginForm)