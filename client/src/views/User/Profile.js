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

    handleResumeClick(){
        httpClient.getResume(this.props.currentUser._id).then((apiResponse) => {
        this.props.history.push('/resume')
        })
    }

    handleResumeEditClick(){
        this.props.history.push('/editresume')
    }

    handleResumeDelete(id){
        httpClient.deleteResume(id).then((apiResponse) => {
            console.log(apiResponse)
            this.setState({
                resumes: this.state.resumes.filter((r) => {
                    console.log(r._id)
                    console.log(id)
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
        // console.log(this.props.currentUser)
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
                <div className={r.templateName} key={r._id}>                                                                  {/*CHANGE CLASSNAME DYNAMICALLY AS THE USER CLICKS ON DROPDOWN OPTIONS*/}
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
                        {/* startDate.toLocaleDateString('en-US') */}
                        <p>{r.experience[0].details}</p>
                        {/* <p>Company</p>                    
                        <h4>Title <span>, 10 Jan 2010 </span></h4>
                        <p>{r.phone}</p>                    */}
                    </div>
                    <div className="education">
                        <h3>EDUCATION</h3>
                            <h4>{r.education[0].institution}</h4>
                                <p>{r.education[0].degree} <span> {graduationDate && graduationDate.toLocaleDateString()}</span></p>                      
                    </div>
                    <Button className="show-resume" onClick={this.handleResumeClick.bind(this)}>SHOW</Button>
                    <Link className="ui button show-resume show-resume" to={`/resumes/${r._id}/edit`}>EDIT</Link>      
                    <Button className="show-resume" onClick={this.handleResumeDelete.bind(this, r._id)}>DELETE</Button>      
                          
                </div>
                
             )
             
        })} 
        </div>     
        )
    }
}

export default Profile




// {/* <Grid columns={2} divided>
            
//             <Grid.Row>
//                 <Grid.Column>
//                     <p>{r.summary}</p>
//                 </Grid.Column>
//                 <Grid.Column>
//                     <h3>SUMMARY</h3>                
//                 </Grid.Column>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//             </Grid.Row>

//             <Grid.Row>
//                 <Grid.Column>
//                     <p>{r.technical}</p>
//                 </Grid.Column>
//                 <Grid.Column>
//                     <h3>TECHNICAL SKILLS</h3>                
//                 </Grid.Column>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//             </Grid.Row>

//             <Grid.Row>
//                 <Grid.Column>
//                     <p>{r.projects.title}</p>
//                 </Grid.Column>
//                 <Grid.Column>
//                     <h3>PROJECTS</h3>  
//                 </Grid.Column>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//             </Grid.Row>

//             <Grid.Row>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//                 <Grid.Column>
//                     <h3>EXPERIENCE</h3> 
//                     <h4>Company1</h4> <br/>
//                     <h4>Company2</h4> <br/>
                
//                 </Grid.Column>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//             </Grid.Row>
            
//             <Grid.Row>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//                 <Grid.Column>
//                     <h3>EDUCATION</h3> 
//                     <h4>School1</h4> <br/>
//                     <h4>School2</h4> <br/>               
//                 </Grid.Column>
//                 <Grid.Column>
//                     <p></p>
//                 </Grid.Column>
//             </Grid.Row>
//         </Grid> */}

//         {/* <div>         

//                 /* <Modal className="ModalProfile" trigger={<Card className="Profile-card"
//                     image='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'
//                     header={this.state.fields.name}
//                     meta={this.state.fields.email}
//                     extra={<Button onClick={this.handleEditClick.bind(this)}>EDIT</Button>}
//                     />} open={modalOpen} > */
//                   /* <Modal.Header>EDIT YOUR PROFILE</Modal.Header>
//                   <Modal.Content image>
//                     <Image wrapped size='small' src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
//                     <Form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
//                         <Form.Group>
//                             <Form.Input type="text" value={fields.name} name='name' />
//                             <Form.Input type="text" placeholder='Email' name='email' value={fields.email} />
//                             <Form.Input type="password" placeholder='Password' name='password' />
//                             <Button>Submit</Button>
//                         </Form.Group>
//                     </Form>
                    
//                   </Modal.Content>
//                 </Modal> 
//            </div> */}
           