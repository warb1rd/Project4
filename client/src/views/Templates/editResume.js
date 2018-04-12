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
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';

import Education from './Education.js';
import Institution from './Institution.js';
import Degree from './Degree.js';
import GraduationDate from './GraduationDate.js';

import httpClient from '../../httpClient.js';
// import Date from '../DatePicker.js'


const templateOptions = [
    {text:'Minimal', value: "Template1"},
    {text:"Lines", value: "Template2"},
    {text:"Cool", value: "Template3"},
    {text:"Rad", value: "Template4"}
]

class EditResume extends Component {
    state = {
        templateName: "Template1",
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

    handleLabelClick(event) {
		this.setState({
            templateName:event.target.textContent
        })
        console.log(event.target.textContent)
    }

    handleFormSubmit(evt) {
        evt.preventDefault()
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, startDate, endDate, details, institution, degree, graduationDate, makePublic} = this.state
        const dataToSend = {
            header: {
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
                    <Dropdown onChange={this.handleLabelClick.bind(this)} name='templateOptions' placeholder='TEMPLATES' fluid search selection options={templateOptions} />
                    <Form.Field label='NAME' name='name'  control='input' value={name}/>
                    <Form.Field label='EMAIL' name='email' control='input' value={email}/>
                    <Form.Field label='PHONE' name='phone' control='input'  value={phone}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='SUMMARY' name='summary' control='textarea' rows='3' value={summary}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='TECHNICAL SKILLS' name='technical' control='input'  value={technical}/>
                </Form.Group>
                    
                <Form.Group widths='equal'>
                    <Form.Field label='PROJECTS' placeholder='Title' name='title'control='input' rows='1'  value={title}/>
                    <Form.Field label='.' placeholder='Description' name='description' control='textarea' rows='2'  value={description} />
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

                { ({
                    Minimal: <Template1 content={this.state}  />,
                    Lines: <Template2 content={this.state} />,
                    Cool: <Template3 content={this.state} />,
                    Rad: <Template4 content={this.state} />
                })[this.state.templateName] }
                
            </div>
        )
    }
}

export default EditResume