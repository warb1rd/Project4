import React, {Component} from 'react';
import { Button, Header, Image, Modal, Card, Form } from 'semantic-ui-react';
import httpClient from '../../httpClient.js'

class Profile extends Component {

    state = {
        fields: {
            name: "",
            email: "",
            password: ""
        },
        modalOpen: false
    }

    handleEditClick(){
        this.setState({
            modalOpen: true
        })
    }
  
    handleSubmit(evt) {
        console.log("clicked")
		evt.preventDefault()
		httpClient.updateUser(this.props.currentUser._id, this.state.fields).then((apiResponse) => {
            console.log(apiResponse)
			this.setState({ 
                fields: apiResponse.data,
                modalOpen: false
            })
        })
    }

    handleChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    componentDidMount(){
        httpClient.getUser(this.props.currentUser._id).then((serverResponse)=>{
            console.log(serverResponse)
            this.setState({
                fields: serverResponse.data
            })
        })
    }

    render(){
        const {fields, modalOpen} = this.state
        return(
            <div>         

                <Modal className="ModalProfile" trigger={<Card className="Profile-card"
                    image='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
                    header={this.state.fields.name}
                    meta={this.state.fields.email}
                    extra={<Button onClick={this.handleEditClick.bind(this)}>EDIT</Button>}
                    />} open={modalOpen} >
                  <Modal.Header>EDIT YOUR PROFILE</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='small' src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
                    <Form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
                        <Form.Group>
                            <Form.Input type="text" value={fields.name} name='name' />
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

