import React, {Component} from 'react';
import { Form , Grid } from 'semantic-ui-react';
// import Template4 from './Template4.js';
import Summary from './Summary.js';
import Technical from './Technical.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Education from './Education.js'
import httpClient from '../../httpClient.js';


class NewResume extends Component {
    state = {
        // header:{
        name: "",
        email: "",
        phone: "",
        // },
        summary: "", 
        technical: "",
        // projects: [{
        title: "",
        description: "",
        // }],
        // experience: [{
        company: "",
        jobTitle: "",
        date: "", 
        details: "",
        // }],
        // education: [{
        institution: "",
        degree: "",
        graduationDate: "",
        // }],
        makePublic: false,
    }

    handleChange(event) {
		this.setState({
                ...this.state,
                [event.target.name]: event.target.value
		})
    }

    handleFormSubmit(evt) {
        evt.preventDefault()
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, date, details, institution, degree, graduationDate} = this.state
        const dataToSend = {
            headers: {
                name: name,
                email: email,
                phone: phone
            },
            summary: summary, 
            technical: technical,
            projects: [{
                title: title,
                description: description,
            }],
            experience: [{
                company: company,
                title: title,
                date: date, 
                details: details,
            }],
            education: [{
                institution: institution,
                degree: degree,
                graduationDate: graduationDate,
            }],
        }
        httpClient.createResume(dataToSend).then((apiResponse) => {
            this.props.history.push("/profile")

        })
    }

    //use component did mount? history.goBack
   render(){        
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, date, details, institution, degree, graduationDate} = this.state
        console.log(this.state)    
        return (
            <div>
            <Form onChange={this.handleChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)} className="Form-container">
                <Form.Group widths='equal'>
                    <Form.Field label='NAME' name='name'  control='input' />
                    <Form.Field label='EMAIL' name='email' control='input'/>
                    <Form.Field label='PHONE' name='phone' control='input' />
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='SUMMARY' name='summary' control='textarea' rows='3'/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='TECHNICAL SKILLS' control='input'/>
                </Form.Group>
                    
                <Form.Group widths='equal'>
                    <Form.Field label='PROJECTS' placeholder='Title' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Description' control='textarea' rows='2' />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field label='EXPERIENCE' placeholder='Company' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Title' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Date from' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Date to' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Details' control='textarea' rows='2' />                  
                </Form.Group>
                
                <Form.Group widths='equal'>
                    <Form.Field label='EDUCATION' placeholder='Institution' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Degree' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Date' control='input' rows='2' />
                </Form.Group>
                
                <Form.Field control='button'>
                    SUBMIT
                </Form.Field>

                <Form.Group grouped>
                    <label>Do you want to make your resume searchable?</label>
                    <Form.Field label='Make Public' control='input' type='checkbox' />
                </Form.Group>
            </Form>
           
                    <div>
                        <div className="Template4">
                            <div className="header">
                                <h2 className="name">{name}</h2>
                                <p>{email}<span> || </span><span>{phone}</span></p>
                            </div>
                                    
                            <Grid columns={2} divided> 
                                <Summary content={summary}/>
                                <Technical content={technical}/>  
                                <Projects content={title}/>
                                <Experience content={company}/>                              
                                <Education content={institution}/>              
                            </Grid>
                            </div>
                </div>
                
            </div>
        )
    }
}

export default NewResume