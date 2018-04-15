import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import httpClient from '../../httpClient.js'


class SignUp extends Component {
    state = {
        fields:{ 
            name: "", 
            email: "", 
            password: ""
        },
        errorMessage: null, 
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
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ 
                fields: { 
                    name: "", 
                    email: "", 
                    password: "" 
                } 
            })
			if(user) {
                this.props.onSignUpSuccess(user)
				this.props.history.push('/')
            }
            this.setState({
                errorMessage: "Something seems wrong. Did you mean to Login?",
            })
		})
	}

    render() {
        const { name, email, password } = this.state.fields

        return (
            <div>
            {this.state.errorMessage !== null && <p style={{backgroundColor:"lightcoral", borderRadius:"2px"}}>{this.state.errorMessage}</p>}

            <Form className="signup-form" onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group>
                    <Form.Input type="text" placeholder='Name' name='name' value={name} />
                    <Form.Input type="text" placeholder='Email' name='email' value={email} />
                    <Form.Input type="password" placeholder='Password' name='password' value={password} />
                    <Button className="signup-button">Submit</Button>
                </Form.Group>
            </Form>
            </div>
        )
  }
}

export default SignUp