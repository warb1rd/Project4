import React, {Component} from 'react';
import { Form , Checkbox, Dropdown, Button } from 'semantic-ui-react';

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
        resumeData: null
    }

    componentDidMount(){
        httpClient.getResume(this.props.match.params.id).then((apiResponse)=>{
            this.setState({
                resumeData: apiResponse.data
            })
        })
    }

    handleChange(event) {
		this.setState({
            // [event.target.name]: event.target.value,
            resumeData: {
                ...this.state.resumeData,
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
                makePublic: !this.state.resumeData.makePublic,
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
    }

    handleFormSubmit(evt) {
        evt.preventDefault()
        httpClient.updateResume(this.props.match.params.id, this.state.resumeData).then((apiResponse) => {
            this.props.history.push("/profile")
        })
    }

   render(){  
    const templateOptions = [
        {text:'Minimal', value: "Template1"},
        {text:"Lines", value: "Template2"},
        {text:"Cool", value: "Template3"},
        {text:"Rad", value: "Template4"}
    ]
        const { resumeData } = this.state
        console.log(resumeData)
        if(!resumeData) return <h1>Loading...</h1>
        return (
            <div>
            <Form onChange={this.handleChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)} className="Form-container">                
                <Form.Group widths='equal'>
                    <Dropdown onChange={this.handleDropDownClick.bind(this)} name='templateOptions' placeholder='TEMPLATES' fluid search selection options={templateOptions} />
                        <div className="field">
                            <label>NAME</label>
                            <input ref="name" label='Name' name='name'  type='text' defaultValue={resumeData.header.name} />
                        </div>
                        <div className="field">
                            <label>EMAIL</label>
                            <input ref="email" label='Email' name='email'  type='text'  defaultValue={resumeData.header.email}/>
                        </div>
                        <div className="field">
                            <label>PHONE</label>
                            <input ref="phone" label='Phone' name='phone'  type='text'  defaultValue={resumeData.header.phone}/>
                        </div>
                </Form.Group>
                
                <Form.Group>
                    <div className="field">
                        <label>SUMMARY</label>
                        <input ref="summary" label='Summary' name='summary'  type='text'  defaultValue={resumeData.summary}/>
                    </div>   
                </Form.Group>
                
                <Form.Group>
                    <div className="field">
                        <label>TECHNICAL</label>
                        <input ref="technical" label='Technical' name='technical'  type='text'  defaultValue={resumeData.technical}/>
                    </div>
                </Form.Group>
                    
                <Form.Group widths='equal'>
                    <div className="field">
                        <label>PROJECT</label>
                        <input ref="title" label='NAME' name='title'  placeholder="Project Title" type='text'  defaultValue={resumeData.projects[0].title}/>
                    </div>
                    
                    <div className="field">
                        <label>.</label>
                        <input ref="description" label='Description' name='description'  type='text'  defaultValue={resumeData.projects[0].description}/>
                    </div>                
                </Form.Group>

                <Form.Group widths='equal'>
                    <div className="field">
                        <label>EXPERIENCE</label> 
                            <input ref="company" label='Company' name='company'  type='text' placeholder='Company'  defaultValue={resumeData.experience[0].company}/>
                    </div>
                    <div className="field">
                        <label>.</label>
                        <input ref="jobTitle" label='Job Title' name='jobTitle'  type='text' placeholder='Job Title'  defaultValue={resumeData.experience[0].jobTitle}/>
                    </div>
                    <div className="field">
                        <label>.</label>
                        <input ref="startDate" label='From' name='startDate'  type='date' placeholder='From'  defaultValue={resumeData.experience[0].startDate}/>
                    </div>
                    <div className="field">
                        <label>.</label>
                        <input ref="endDate" label='To' name='endDate'  type='date' placeholder='To'  defaultValue={resumeData.experience[0].endDate}/>
                    </div>
                    <div className="field">
                        <label>.</label>
                        <input ref="details" label='Details' name='details'  type='text' placeholder='Details'  defaultValue={resumeData.experience[0].details}/>
                    </div>                  
                </Form.Group>
                
                <Form.Group widths='equal'>
                    <div className="field">
                        <label>EDUCATION</label> 
                        <input ref="institution" label='Institution' name='institution'  type='text' placeholder='Institution'  defaultValue={resumeData.education[0].institution}/>
                    </div>
                    <div className="field">
                        <label>.</label>
                        <input ref="degree" label='Degree' name='degree'  type='text' placeholder='Degree'  defaultValue={resumeData.education[0].degree}/>
                    </div>
                    <div className="field">
                        <label>.</label>
                        <input ref="graduationDate" label='Graduation date' name='graduationDate'  type='date' placeholder='Date' defaultValue={resumeData.education[0].graduationDate}/>
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
                    Minimal: <Template1 content={this.state.resumeData}  />,
                    Lines: <Template2 content={this.state.resumeData} />,
                    Cool: <Template3 content={this.state.resumeData} />,
                    Rad: <Template4 content={this.state.resumeData} />
                })[this.state.resumeData.templateName] }
                
            </div>
        )
    }
}

export default EditResume