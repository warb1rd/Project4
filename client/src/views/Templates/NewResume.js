import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';
import Template4 from './Template4.js';
import Summary from './Summary.js';
import Technical from './Technical.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Education from './Education.js'


class NewResume extends Component {
    state = {
        header:{
            name: "",
            email: "",
            phone: ""
        },
        summarry: "", 
        technical: [],
        projects: [{
            title: "",
            description: ""
        }],
        experience: [{
            company: "",
            title: "",
            date: "", 
            details: ""
        }],
        education: [{
            institution: "",
            degree: "",
            graduationDate: ""
        }],
        makePublic: false,
    }
    handleChange(event) {
		this.setState({
            header:{
                ...this.state.header,
                [event.target.name]: event.target.value
            }, 
		})
    }
    //use component did mount? history.goBack
   render(){        
        const {name, email, phone,} = this.state.header
        const {summary, technical} = this.state
        const {company, title, date, details} = this.state.experience
        const {institution, degree, graduationDate} = this.state.education 
        console.log(summary)    
        return (
            <div>
            <Form onChange={this.handleChange.bind(this)} className="Form-container">
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

            {Object.keys(this.state.header).map(fieldName => {
                return (
                    <div>
                        <div className="Template4">
                            <div className="header">
                                <h2 className="name">{this.state.header[fieldName]}</h2>
                                <p>{this.state.header.email}<span>||</span><span>{this.state.header.phone}</span></p>
                            </div>
                                    
                            <Grid columns={2} divided> 
                                <Summary summarry={summary}/>
                                <Technical />  
                                <Projects />
                                <Experience />                              
                                <Education />              
                            </Grid>
                            </div>
                </div>
                )
            })}
            </div>
        )
    }
}

export default NewResume