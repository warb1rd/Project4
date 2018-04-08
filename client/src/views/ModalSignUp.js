import React, { Component } from 'react';
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react';
import httpClient from '../httpClient.js';

class ModalSignUp extends Component {
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
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
    }
    
    render(){
        const { name, email, password } = this.state

        return(
            <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content >
            <Modal.Description>
                <Form onSubmit={this.handleSubmit.bind.this}  onChange={this.handleChange.bind(this)}>
                    <Form.Group>
                        <Form.Input placeholder='Name' name='name' value={name} />
                        <Form.Input placeholder='Email' name='email' value={email} />
                        <Form.Input type= "password" placeholder='Password' name='password' value={password} />
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </Modal.Description>
            </Modal.Content>
        </Modal>
        )
    }
}

export default ModalSignUp