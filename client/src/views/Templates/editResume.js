import React, {Component} from 'react';
import { Form , Checkbox, Dropdown, Button } from 'semantic-ui-react';

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

class EditResume extends Component {
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
//NOT HAVE COMPONENT DID MOUNT?? GET INITIAL VALUE ON STATE FROM HTTP CLIENT?? 
    componentDidMount(){
        httpClient.getResume(this.props.match.params.id).then((apiResponse)=>{
            console.log(apiResponse.data.resumeData)

            const {header,experience, projects, education, summary, technical, templateName} = apiResponse.data
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
                    // templateName: 
                }
            })
        })
    }

    handleChange(event) {
        const {header, summary, technical, projects, experience, education, makePublic, templateName} = this.state.resumeData
		this.setState({
                ...this.state,
                [event.target.name]: event.target.value,
                resumeData: {
                    header: {
                        name: header.name,
                        email: header.email,
                        phone: header.phone,
                    },
                    summary: summary, 
                    technical: technical,
                    projects: [{
                        title: projects[0].title,
                        description: projects[0].description,
                    }],
                    experience: [{
                        company: experience[0].company,
                        jobTitle: experience[0].jobTitle,
                        startDate: experience[0].startDate, 
                        endDate: experience[0].endDate,
                        details: experience[0].details,
                    }],
                    education: [{
                        institution: education[0].institution,
                        degree: education[0].degree,
                        graduationDate: education[0].graduationDate,
                    }],
                    makePublic: !makePublic,
                    templateName: event.target.textContent
                    
                }
             
		})
    }

    handleDropDownClick(event) {
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
                jobTitle: jobTitle,
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
        httpClient.updateResume(this.props.match.params.id, dataToSend).then((apiResponse) => {
            this.props.history.push("/profile")
            console.log(apiResponse)
        })
    }

   render(){  
    const templateOptions = [
        {text:'Minimal', value: "Template1"},
        {text:"Lines", value: "Template2"},
        {text:"Cool", value: "Template3"},
        {text:"Rad", value: "Template4"}
    ]
        const {name, email, phone, summary, technical, title, description, company, 
            jobTitle, startDate, endDate, details, institution, degree, graduationDate} = this.state
        return (
            <div>
            <Form onChange={this.handleChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)} className="Form-container">                
                <Form.Group widths='equal'>
                    <Dropdown onChange={this.handleDropDownClick.bind(this)} name='templateOptions' placeholder='TEMPLATES' fluid search selection options={templateOptions} />
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
                </Form.Group>
                
                <Button> SAVE RESUME </Button>

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