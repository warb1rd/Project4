import React, {Component} from 'react';
import { Button, Header, Image, Modal, Card, Form } from 'semantic-ui-react';
import httpClient from '../httpClient.js'

class Profile extends Component {

    state = {
        fields: httpClient.getCurrentUser(),
        modalOpen: false
    }

    handleEditClick(){
        console.log("clicked")
        this.setState({
            modalOpen: true
        })
    }


    handleSubmit(evt) {
        console.log("clicked")
		evt.preventDefault()
		httpClient.updateUser(this.state.fields).then(user => {
            console.log(user)
			this.setState({ 
              modalOpen: false
            })
		})
	}

    componentDidMount(){
        httpClient.getUser(this.props.match.params.id).then((serverResponse) => {
            this.setState({
                fields: serverResponse.data
            })
        })
    }
   


    render(){
        const {fields, modalOpen} = this.state
        return(
            <div>
            <Card
            header={this.state.fields.name}
            meta={this.state.fields.email}
            extra={<Button onClick={this.handleEditClick.bind(this)}>EDIT</Button>}
            />
                <Modal isOpen={modalOpen} >
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group>
                    <Form.Input type="text" defaultValue={fields.name} name='name' />
                    <Form.Input type="text" placeholder='Email' name='email' value={fields.email} />
                    <Form.Input type="password" placeholder='Password' name='password' />
                    <Button>Submit</Button>
                </Form.Group>
            </Form>
                    
                  </Modal.Content>
                </Modal>
                </div>
              )
        }
}

export default Profile

// handleSubmit(evt) {
//     evt.preventDefault()
//     console.log("clicked")
//     const {name, email, password} = this.refs
//     const {userFields} = {
//         name: refs.name.value,
//         email: refs.email.value,
//         password: refs.password.value
//     }
//     httpClient.updateUser(this.props.match.params.id).then(user => {
//         console.log(user)
//         this.setState({ 
//             currentUser:serverResponse.data.currentUser,
//             modalOpen: false

//         })
//     })
// }


// handleChange(evt) {
//     this.setState({
//         fields: {
//             ...this.state.fields,
//             [evt.target.name]: evt.target.value
//         }
//     })
// }