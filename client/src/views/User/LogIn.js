import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import httpClient from '../../httpClient.js'
// import {Alert} from 'reactstrap';

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
        console.log("clicked")
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(apiResponse => {
            console.log(apiResponse)
			this.setState({ 
                fields: { 
                    email: "", 
                    password: "" 
                }
            })
			if(apiResponse) {
                this.props.onLoginSuccess(apiResponse)
				this.props.history.push('/profile')
			} setTimeout(this.setState({
                errorMessage: "Something seems wrong, try again.",
                padding: "30px"
            }) , 5000)
		})
	}

    render() {
        const {email, password, errorMessage} = this.state.fields

        return (
            <div>
                 {/* <Alert color="warning">{this.state.errorMessage}</Alert> */}

                {this.state.errorMessage !== null && <p style={{backgroundColor:"lightcoral", borderRadius:"2px", padding:"{this.state.padding}"}}>{this.state.errorMessage}</p>}

            {/* {Object.keys(this.state.fields).map(fieldName => {
                return (
                    <div>
                        <h2>{fieldName}</h2>
                        <p>{this.state.fields[fieldName]}</p>
                    </div>
                )
            })} */}

            <Form signup-form onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group>               
                    <Form.Input type="text" placeholder='Email' name='email' value={email} />
                    <Form.Input type="password" placeholder='Password' name='password' value={password} />
                    <Button type="submit">LOGIN</Button>
                </Form.Group>
            </Form>
           
            </div>
            
        )
    }
    
}

export default Login