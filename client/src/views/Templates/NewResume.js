import React, {Component} from 'react';
import { Form , Grid, Checkbox, Menu, Dropdown } from 'semantic-ui-react';
// import Template4 from './Template4.js';
import Summary from './Summary.js';
import Technical from './Technical.js';
import Projects from './Projects.js';
import Description from './Description.js';
import Experience from './Experience.js';
import Company from './Company.js';
import JobTitle from './JobTitle.js'
import Details from './Details.js';
import StartDate from './StartDate.js';
import EndDate from './EndDate.js';
import Template1 from './Template1.js';
import Template2 from './Template2.js'
import Template3 from './Template3.js'
import Template4 from './Template4.js'

import Education from './Education.js';
import Institution from './Institution.js';
import Degree from './Degree.js'
import GraduationDate from './GraduationDate.js';

import httpClient from '../../httpClient.js';
// import Date from '../DatePicker.js'

class NewResume extends Component {
    state = {
        templateName: "Template3",
        // [{name:"Template1",name:"Template2", name:"Template3", name:"Template4"}]
        name: "",
        email: "",
        phone: "",
        summary: "", 
        technical: "",
        title: "",
        description: "",
        company: "",
        jobTitle: "",
        startDate: "", 
        endDate: "",         
        details: "",
        institution: "",
        degree: "",
        graduationDate: "",
        makePublic: false,
    }

    handleChange(event) {
		this.setState({
                ...this.state,
                [event.target.name]: event.target.value,
                makePublic: !this.state.makePublic
		})
    }

    handleFormSubmit(evt) {
        evt.preventDefault()
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, startDate, endDate, details, institution, degree, graduationDate, makePublic} = this.state
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
                jobTitle: title,
                startDate: startDate, 
                endDate: endDate,
                details: details,
            }],
            education: [{
                institution: institution,
                degree: degree,
                graduationDate: graduationDate,
            }],
            makePublic: makePublic
        }
        console.log(dataToSend)
        httpClient.createResume(dataToSend).then((apiResponse) => {
            this.props.history.push("/profile")
            console.log(apiResponse)
        })
    }

    //use component did mount? history.goBack
   render(){  
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, startDate, endDate, details, institution, degree, graduationDate, templateName} = this.state
        return (
            <div>
            <Form onChange={this.handleChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)} className="Form-container">
                <Form.Group widths='equal'>
                    <Dropdown placeholder='TEMPLATES' search selection options={templateName} />
                    <Form.Field label='NAME' name='name'  control='input' />
                    <Form.Field label='EMAIL' name='email' control='input'/>
                    <Form.Field label='PHONE' name='phone' control='input' />
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='SUMMARY' name='summary' control='textarea' rows='3'/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='TECHNICAL SKILLS' name='technical' control='input'/>
                </Form.Group>
                    
                <Form.Group widths='equal'>
                    <Form.Field label='PROJECTS' placeholder='Title' name='title'control='input' rows='1' />
                    <Form.Field label='.' placeholder='Description' name='description' control='textarea' rows='2' />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field label='EXPERIENCE' placeholder='Company' name='company' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Job Title' name='jobTitle' control='input' rows='2' />
                    <Form.Field label='From' placeholder='Date from' name='startDate' type='date' control='input'  rows='2' />
                    <Form.Field label='To' placeholder='Date to' name='endDate' type='date' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Details' name='details' control='textarea' rows='2' />                  
                </Form.Group>
                
                <Form.Group widths='equal'>
                    <Form.Field label='EDUCATION' placeholder='Institution' name='institution' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Degree' control='input' name='degree' rows='2' />
                    <Form.Field label='.' placeholder='Date' control='input' type='date' name='graduationDate' rows='2' />
                </Form.Group>
                
                <Form.Field control='button'>
                    SUBMIT
                </Form.Field>

                <Form.Group grouped>                   
                    <Form.Field>
                        <Checkbox label="Do you want to make your resume searchable?" onChange={this.handleChange.bind(this)}/>
                    </Form.Field>
                </Form.Group>
            </Form>          
                        {/* <div className='Template4'>
                            <div className='header'>
                                <h2 className='name'>{name}</h2>
                                <p>{email}<span> || </span><span>{phone}</span></p>
                            </div>
                                    
                            <Grid columns={2} divided> 
                                <Summary content={summary}/>
                                <Technical content={technical}/>  
                                <Projects content={title}/>
                                    <Description content={description}/>                             
                                
                                <Experience content={company}/> 
                                    <JobTitle content={jobTitle}/>
                                    <StartDate content={startDate}/> - <EndDate content={endDate}/>       
                                    <Details content={details}/>
                                                          
                                                                     
                                <Education content={institution}/>
                                    <Degree content={degree}/> 
                                    <GraduationDate content={graduationDate}/>                                                                                            
                                              
                            </Grid>
                            </div> */}

                { ({
                    Template1: <Template1 content={this.state}  />,
                    Template2: <Template2 content={this.state} />,
                    Template3: <Template3 content={this.state} />,
                    Template4: <Template4 content={this.state} />
                })[this.state.templateName] }
                
            </div>
        )
    }
}

export default NewResume