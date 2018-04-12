import React, {Component} from 'react';
import { Button, Header, Image, Modal, Card, Form, Grid } from 'semantic-ui-react';
import httpClient from '../../httpClient.js'


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

    onClickHandler(){
        httpClient.getResume(this.props.currentUser._id).then((apiResponse) => {
        this.props.history.push('/resume')
        })
    }

    handleEditClick(){
        this.setState({
            modalOpen: true
        })
    }
  
    handleSubmit(evt) {
		evt.preventDefault()
		httpClient.updateUser(this.props.currentUser._id, this.state.fields).then((apiResponse) => {
			this.setState({ 
                fields: apiResponse.data.user,
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

    render(){
        const {fields, modalOpen, resumes} = this.state
        // console.log(this.props.currentUser)
        return(
            <div>
                <div> 
                    <Card className="Profile-card"
                        image='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
                        header={this.state.fields.name}
                        meta={this.state.fields.email}
                        extra=
                        {<Modal className="Modal" closeOnDimmerClick={true} className="ModalProfile" open={modalOpen} trigger=
                            {<Button onClick=
                                {this.handleEditClick.bind(this)}>EDIT</Button>
                            }>
                        
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
                        }  
                        />                    
                </div>  


           {/* <div>         

                /* <Modal className="ModalProfile" trigger={<Card className="Profile-card"
                    image='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
                    header={this.state.fields.name}
                    meta={this.state.fields.email}
                    extra={<Button onClick={this.handleEditClick.bind(this)}>EDIT</Button>}
                    />} open={modalOpen} > */
                  /* <Modal.Header>EDIT YOUR PROFILE</Modal.Header>
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
           </div> */}
           
           
        {resumes.map((r) => {
            return(
                <div className="Template3">                                 {/*CHANGE CLASSNAME DYNAMICALLY AS THE USER CLICKS ON DROPDOWN OPTIONS*/}
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
                        <h4>{r.projects.title}</h4>
                        <p>{r.projects.description}</p>
                    </div>

                    <div className="experience">
                        <h3>EXPERIENCE</h3>
                        <p>{r.experience.company}</p>                    
                        <h4>{r.experience.jobTitle} <span> {r.experience.startDate} to {r.experience.endDate}</span></h4>
                        <p>{r.experience.details}</p>
                        {/* <p>Company</p>                    
                        <h4>Title <span>, 10 Jan 2010 </span></h4>
                        <p>{r.phone}</p>                    */}
                    </div>
                    <div className="education">
                        <h3>EDUCATION</h3>
                            <h4>{r.education.institution}</h4>
                                <p>{r.education.degree}<span> {r.education.graduationDate}</span></p>                      
                    </div>
                    <Button className="show-resume" onClick={this.onClickHandler.bind(this)}>SHOW</Button>      
                </div>
                
             )
             
        })} 
        </div>     
        )
    }
}



export default Profile

{/* <Grid columns={2} divided>
            
            <Grid.Row>
                <Grid.Column>
                    <p>{r.summary}</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>SUMMARY</h3>                
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <p>{r.technical}</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>TECHNICAL SKILLS</h3>                
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <p>{r.projects.title}</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>PROJECTS</h3>  
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
                <Grid.Column>
                    <h3>EXPERIENCE</h3> 
                    <h4>Company1</h4> <br/>
                    <h4>Company2</h4> <br/>
                
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid.Row>
            
            <Grid.Row>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
                <Grid.Column>
                    <h3>EDUCATION</h3> 
                    <h4>School1</h4> <br/>
                    <h4>School2</h4> <br/>               
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid.Row>
        </Grid> */}