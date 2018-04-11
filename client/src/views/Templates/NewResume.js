import React, {Component} from 'react';
import { Form , Grid, Checkbox } from 'semantic-ui-react';
// import Template4 from './Template4.js';
import Summary from './Summary.js';
import Technical from './Technical.js';
import Projects from './Projects.js';
import Description from './Description.js';
import Experience from './Experience.js';
import Company from './Company.js';
import Details from './Details.js';
import DateFrom from './DateFrom.js';


import Education from './Education.js'
import httpClient from '../../httpClient.js';
// import Date from '../DatePicker.js'

class NewResume extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        summary: "", 
        technical: "",
        title: "",
        description: "",
        company: "",
        jobTitle: "",
        dateFrom: "", 
        dateTo: "",         
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
            jobTitle, dateFrom, dateTo, details, institution, degree, graduationDate} = this.state
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
                dateFrom: dateFrom, 
                dateTo: dateTo,
                details: details,
            }],
            education: [{
                institution: institution,
                degree: degree,
                graduationDate: graduationDate,
            }],
        }
        console.log(dataToSend)
        httpClient.createResume(dataToSend).then((apiResponse) => {
            this.props.history.push("/profile")

        })
    }

    //use component did mount? history.goBack
   render(){  
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, dateFrom, dateTo, details, institution, degree, graduationDate} = this.state
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
                    <Form.Field label='TECHNICAL SKILLS' name='technical' control='input'/>
                </Form.Group>
                    
                <Form.Group widths='equal'>
                    <Form.Field label='PROJECTS' placeholder='Title' name='title'control='input' rows='1' />
                    <Form.Field label='.' placeholder='Description' name='description' control='textarea' rows='2' />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field label='EXPERIENCE' placeholder='Company' name='company' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Job Title' name='jobTitle' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Date from' name='dateTo' type='date' control='input'  rows='2' />
                    <Form.Field label='.' placeholder='Date to' name='dateTo' type='date' control='input' rows='2' />
                    <Form.Field label='.' placeholder='Details' name='details' control='textarea' rows='2' />                  
                </Form.Group>
                
                <Form.Group widths='equal'>
                    <Form.Field label='EDUCATION' placeholder='Institution' name='institution' control='input' rows='1' />
                    <Form.Field label='.' placeholder='Degree' control='input' name='degree' rows='2' />
                    <Form.Field label='.' placeholder='Date' control='input' type='date' name='date' rows='2' />
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
                        <div className='Template4'>
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
                                    <DateFrom content={dateFrom}/>                             
                                    <DateTo content={dateTo}/>                             
                                    <Description content={description}/>                             
                                                                     
                                <Education content={institution}/>
                                    <Institution content={institution}/>                             
                                    <Degree content={degree}/> 
                                    <GraduationDate content={graduationDate}/>                             
                                                                
                                              
                            </Grid>
                            </div>
                
            </div>
        )
    }
}

export default NewResume