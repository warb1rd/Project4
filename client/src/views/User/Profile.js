import React, {Component} from 'react';
import { Button, Image, Modal, Card, Form } from 'semantic-ui-react';
import httpClient from '../../httpClient.js'
import { Link } from 'react-router-dom'

class Profile extends Component {
    state = {
        fields: {
            name: "",
            email: "",
            password: ""
        },
        resumes: [],
        modalOpen: false
    }

    componentDidMount(){

        httpClient.getUser(this.props.currentUser._id).then((apiResponse)=>{
            this.setState({
                fields: apiResponse.data
            })
        })

        httpClient.getAllResumes().then((serverResponse) => {
            this.setState({
                resumes: serverResponse.data.filter((r)=> {
                    return this.props.currentUser._id === r.user._id
                })
            })
        })
    }

    handleResumeEditClick(){
        this.props.history.push('/resumes/:id/edit')
    }

    handleResumeDelete(id){
        httpClient.deleteResume(id).then((apiResponse) => {
            this.setState({
                resumes: this.state.resumes.filter((r) => {
                    return r._id !== id  
                })
            })
        })
    }

    handleEditClick(){
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
  
    handleSubmit(evt) {
		evt.preventDefault()
		httpClient.updateUser(this.props.currentUser._id, this.state.fields).then((apiResponse) => {
			this.setState({ 
                fields: apiResponse.data.user,
                modalOpen: !this.state.modalOpen
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

    render(){
        const {fields, modalOpen, resumes} = this.state
        return(
            <div>
                <div> 
                    <Card className="Profile-card"
                        image='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
                        header={fields.name}
                        meta={fields.email}
                        extra=
                        {<Modal closeOnDocumentClick={true} open={modalOpen} className="ModalProfile" trigger=
                            {<Button onClick=
                                {this.handleEditClick.bind(this)}>EDIT</Button>
                            }>
                        
                            <Modal.Header>EDIT YOUR PROFILE</Modal.Header>
                            <Modal.Content image>
                            <Image wrapped size='small' src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
                            <Form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
                                <Form.Group>
                                    <Form.Input type="text" value={fields.name} name='name' />
                                    <Form.Input type="text" value={fields.email} name='email'/>
                                    <Form.Input type="password" placeholder='Password' name='password' />
                                    <Button>Submit</Button>
                                </Form.Group>
                            </Form>
                            
                            </Modal.Content>
                        </Modal>
                        }  
                        />                    
                </div>  
           
        {resumes.map((r) => {
            console.log(r)
            var startDate = new Date (r.experience[0].startDate);
            var endDate = new Date (r.experience[0].endDate);
            var graduationDate = new Date (r.education[0].graduationDate);
                      
            return(
                <div className="Template3" key={r._id}>                                                                  {/*CHANGE CLASSNAME DYNAMICALLY AS THE USER CLICKS ON DROPDOWN OPTIONS*/}
                    <div className="header">
                        <h2 className="name">{r.header.name}</h2>
                        <p>{r.header.email}<span>||</span><span>{r.header.phone}</span></p>
                    </div>
          
                    <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>{r.summary}</p>
                    </div>

                    <div className="tech-skills">
                        <h3>TECHNICAL SKILLS</h3>
                        <p>{r.technical}</p>
                    </div>

                    <div className="projects">
                        <h3>PROJECTS</h3>
                        <h4>{r.projects[0].title}</h4>
                        <p>{r.projects[0].description}</p>
                    </div>

                    <div className="experience">
                        <h3>EXPERIENCE</h3>
                        <p>{r.experience[0].company}</p>                    
                        <p>{r.experience[0].jobTitle} <span> {startDate && startDate.toLocaleDateString()} to {endDate && endDate.toLocaleDateString()}</span></p>
                        <p>{r.experience[0].details}</p>
                      
                    </div>
                    <div className="education">
                        <h3>EDUCATION</h3>
                            <h4>{r.education[0].institution}</h4>
                                <p>{r.education[0].degree} <span> {graduationDate && graduationDate.toLocaleDateString()}</span></p>                      
                    </div>
                    <Link className="ui button show-resume" to={`/resume/${r._id}`}>SHOW</Link>
                    <Link className="ui button show-resume" to={`/resumes/${r._id}/edit`}>EDIT</Link>      
                    <Button className="show-resume" onClick={this.handleResumeDelete.bind(this, r._id)}>DELETE</Button>      
                          
                </div>
                
             )
             
        })} 
        </div>     
        )
    }
}

export default Profile
