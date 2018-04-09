import React, { Component } from 'react';
import { Form, Button, Header, Image, Modal, Icon, Menu } from 'semantic-ui-react';
import httpClient from '../httpClient.js';
import { Link } from 'react-router-dom';

class ModalLogIn extends Component {
    state = {
        fields:{ 
            email: "", 
            password: ""
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
		httpClient.logIn(this.state.fields).then(apiResponse => {
            console.log(apiResponse)
			this.setState({ 
                fields: { 
                    email: "", 
                    password: "" 
                }
            })
			if(apiResponse) {
                console.log(this.props)
                this.props.onLoginSuccess(apiResponse)
				this.props.history.push('/')
			}
		})
	}
    
    render(){
        const { name, email, password } = this.state

        return(
            <Modal class="item" content="LOGIN" trigger={ <Menu.Item>
            </Menu.Item>}>
            <Modal.Content >

            <Modal.Description>
                <Form onSubmit={this.handleSubmit.bind.this}  onChange={this.handleChange.bind(this)}>
                    <Form.Group>
                        <Form.Input placeholder='Email' name='email' value={email} />
                        <Form.Input type= "password" placeholder='Password' name='password' value={password} />
                        <Form.Button content='LOGIN' />
                    </Form.Group>
                </Form>
            </Modal.Description>
            </Modal.Content>
        </Modal>
        
        )
    }
}

export default ModalLogIn