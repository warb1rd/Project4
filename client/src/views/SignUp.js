import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import httpClient from '../httpClient.js';


class SignUp extends Component {
    state = {
        fields:{ 
            name: '', 
            email: '', 
            password: ''
        }
    }
    handleChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

    handleSubmit(evt) {
        console.log("clicked")
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
            console.log(user)
			this.setState({ 
                fields: { 
                    name: '', 
                    email: '', 
                    password: '' 
                } 
            })
			if(user) {
                console.log(this.props)
                this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

    render() {
        const { name, email, password } = this.state.fields

        return (
            <Form onChange={this.handleChange.bind(this)}onSubmit={this.handleSubmit.bind.this}>
                <Form.Group>
                    <Form.Input type="text" placeholder='Name' name='name' value={name} />
                    <Form.Input type="text" placeholder='Email' name='email' value={email} />
                    <Form.Input type="password" placeholder='Password' name='password' value={password} />
                    <Form.Button content='Submit' onClick={this.handleSubmit.bind(this)}/>
                </Form.Group>
            </Form>
        )
  }
}

export default SignUp