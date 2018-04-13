import React, {Component} from 'react';
import { Form, Checkbox, Dropdown, Button } from 'semantic-ui-react';

// import Summary from './Summary.js';
// import Technical from './Technical.js';
// import Projects from './Projects.js';
// import Description from './Description.js';
// import Experience from './Experience.js';
// import Company from './Company.js';
// import JobTitle from './JobTitle.js'
// import Details from './Details.js';
// import StartDate from './StartDate.js';
// import EndDate from './EndDate.js';

// import Education from './Education.js';
// import Institution from './Institution.js';
// import Degree from './Degree.js';
// import GraduationDate from './GraduationDate.js';

import Template1 from './Template1.js';
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';

import httpClient from '../../httpClient.js';

const templateOptions = [
    {text:'Minimal', value: "Template1"},
    {text:"Lines", value: "Template2"},
    {text:"Cool", value: "Template3"},
    {text:"Rad", value: "Template4"}
]

class NewResume extends Component {
    state = {
        resumeData: {
            header: {
                name: '',
                email: '',
                phone: ''
            },
            summary: '', 
            technical: '',
            projects: [{
                title: '',
                description: '',
            }],
            experience: [{
                company: '',
                jobTitle: '',
                startDate: '', 
                endDate: '',
                details: '',
            }],
            education: [{
                institution: '',
                degree: '',
                graduationDate: '',
            }],
            makePublic: false,
            templateName: 'Minimal'
        }     
    }

    handleChange(event) {
		this.setState({
            resumeData: {
                header: {
                    name: this.refs.name.value,
                    email: this.refs.email.value,
                    phone: this.refs.phone.value
                },
                summary: this.refs.summary.value, 
                technical: this.refs.technical.value,
                projects: [{
                    title: this.refs.title.value,
                    description: this.refs.description.value,
                }],
                experience: [{
                    company: this.refs.company.value,
                    jobTitle: this.refs.jobTitle.value,
                    startDate: this.refs.startDate.value, 
                    endDate: this.refs.endDate.value,
                    details: this.refs.details.value,
                }],
                education: [{
                    institution: this.refs.institution.value,
                    degree: this.refs.degree.value,
                    graduationDate: this.refs.graduationDate.value,
                }],
                makePublic: true,
                templateName: event.target.textContent
            }
        })
    }

    handleDropdownClick(event) {
		this.setState({
            resumeData: {
                ...this.state.resumeData,
                templateName: event.target.textContent
            }
        })
        console.log(event.target.textContent)
    }

    handleFormSubmit(evt) {
        evt.preventDefault()
        const {makePublic, templateName} = this.state
        httpClient.createResume(this.state.resumeData).then((apiResponse) => {
            this.props.history.push("/profile")
        })
    }

   render(){  
        // const {name, email, phone, summary, technical, title, 
        //     description, company, jobTitle, startDate, endDate, 
        //     details, institution, degree, 
        const {makePublic, templateName,} = this.state
        return (
            <div>
                <Form onChange={this.handleChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)} className="Form-container">                
                    <Form.Group widths='equal'>
                        <Dropdown ref="templateOptions" onChange={this.handleDropdownClick.bind(this)} name='templateOptions' placeholder='TEMPLATES' fluid search selection options={templateOptions} />
                        <div className="field">
                            <label>NAME</label>
                            <input ref="name" label='Name' name='name'  type='text' />
                        </div>
                        <div className="field">
                            <label>EMAIL</label>
                            <input ref="email" label='Email' name='email'  type='text' />
                        </div>
                        <div className="field">
                            <label>PHONE</label>
                            <input ref="phone" label='Phone' name='phone'  type='text' />
                        </div>
                    </Form.Group>
                    
                    <Form.Group>
                        <div className="field">
                            <label>SUMMARY</label>
                            <input ref="summary" label='Summary' name='summary'  type='text' />
                        </div>                    
                    </Form.Group>
                    
                    <Form.Group>
                        <div className="field">
                            <label>TECHNICAL</label>
                            <input ref="technical" label='Technical' name='technical'  type='text' />
                        </div>
                    </Form.Group>  

                    <Form.Group widths='equal'>
                        <div className="field">
                            <label>PROJECT</label>
                            <input ref="title" label='NAME' name='title'  placeholder="Project Title" type='text' />
                        </div>
                        
                        <div className="field">
                            <label>.</label>
                            <input ref="description" label='Description' name='description'  type='text' />
                        </div>
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <div className="field">
                        <label>EXPERIENCE</label> 
                            <input ref="company" label='Company' name='company'  type='text' placeholder='Company' />
                        </div>
                        <div className="field">
                            <label>.</label>
                            <input ref="jobTitle" label='Job Title' name='jobTitle'  type='text' placeholder='Job Title' />
                        </div>
                        <div className="field">
                            <label>.</label>
                            <input ref="startDate" label='From' name='startDate'  type='date' placeholder='From'/>
                        </div>
                        <div className="field">
                            <label>.</label>
                            <input ref="endDate" label='To' name='endDate'  type='date' placeholder='To'/>
                        </div>
                        <div className="field">
                            <label>.</label>
                            <input ref="details" label='Details' name='details'  type='text' placeholder='Details'/>
                        </div>


                        {/* <Form.Field label='EXPERIENCE' placeholder='Company' name='company' control='input' rows='1' />
                        <Form.Field label='.' placeholder='Job Title' name='jobTitle' control='input' rows='2' />
                        <Form.Field label='From' placeholder='Date from' name='startDate' type='date' control='input'  rows='2' />
                        <Form.Field label='To' placeholder='Date to' name='endDate' type='date' control='input' rows='2' />
                        <Form.Field label='.' placeholder='Details' name='details' control='textarea' rows='2' />                   */}
                    </Form.Group>
                    
                    <Form.Group widths='equal'>
                    <div className="field">
                        <label>EDUCATION</label> 
                            <input ref="institution" label='Institution' name='institution'  type='text' placeholder='Institution' />
                        </div>
                        <div className="field">
                            <label>.</label>
                            <input ref="degree" label='Degree' name='degree'  type='text' placeholder='Degree' />
                        </div>
                        <div className="field">
                            <label>.</label>
                            <input ref="graduationDate" label='Graduation date' name='graduationDate'  type='date' placeholder='Date'/>
                        </div>
{/*                 
                        <Form.Field label='EDUCATION' placeholder='Institution' name='institution' control='input' rows='1' />
                        <Form.Field label='.' placeholder='Degree' control='input' name='degree' rows='2' />
                        <Form.Field label='.' placeholder='Date' control='input' type='date' name='graduationDate' rows='2' /> */}
                    </Form.Group>
                    
                    <Button> SAVE RESUME </Button>

                    <Form.Group grouped>                   
                        <Form.Field>
                            {/* <Checkbox label="Make your resume searchable." onChange={this.handleChange.bind(this)}/> */}
                        </Form.Field>
                    </Form.Group>
                </Form>          
                     
                {({
                    Minimal: <Template1 template={this.state.templateName} name={"billy"} content={this.state.resumeData}  />,
                    Lines: <Template2 template={this.state.templateName} content={this.state.resumeData} />,
                    Cool: <Template3 template={this.state.templateName} content={this.state.resumeData} />,
                    Rad: <Template4 template={this.state.templateName} content={this.state.resumeData} />
                })[this.state.resumeData.templateName]}
                
            </div>
        )
    }
}

export default NewResume
