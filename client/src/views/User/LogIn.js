import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import httpClient from '../../httpClient.js'

class Login extends Component {
    state = {
        fields:{ 
            email: "", 
            password: ""
        }, 
        errorMessage: null, 
        padding: ""
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
		httpClient.logIn(this.state.fields).then(apiResponse => {
			this.setState({ 
                fields: { 
                    email: "", 
                    password: "" 
                }
            })
			if(apiResponse) {
                this.props.onLoginSuccess(apiResponse)
				this.props.history.push('/profile')
            } 
            this.setState({
                errorMessage: "Something seems wrong, try again.",
                padding: "30px"
            })
		})
	}

    render() {
        const {email, password, errorMessage} = this.state.fields

        return (
            <div>

                {this.state.errorMessage !== null && <p style={{backgroundColor:"lightcoral", borderRadius:"2px", padding:"{this.state.padding}"}}>{this.state.errorMessage}</p>}

            {/* {Object.keys(this.state.fields).map(fieldName => {
                return (
                    <div>
                        <h2>{fieldName}</h2>
                        <p>{this.state.fields[fieldName]}</p>
                    </div>
                )
            })} */}

            <Form className="login-form" onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group>               
                    <Form.Input type="text" placeholder='Email' name='email' value={email} />
                    <Form.Input type="password" placeholder='Password' name='password' value={password} />
                    <Button className="login-button" type="submit">LOGIN</Button>
                </Form.Group>
            </Form>
           
            </div>
            
        )
    }
    
}

export default Login