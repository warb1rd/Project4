import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';
import Template4 from './Template4.js'

class NewResume extends Component {
    state = {
        header:{
            name: "",
            email: "",
            phone: ""
        },
        summary: "", 
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
    handleChange(evt) {
		this.setState({
            header:{
                ...this.state.header,
                [evt.target.name]: evt.target.value
            }
		})
    }
    //use component did mount? history.goBack
   render(){        
        const {name, email, phone,} = this.state.header
        const {company, title, date, details} = this.state.experience
        const {} = this.state.education     
        return (
            <div>
            <Form onChange={this.handleChange.bind(this)} className="Form-container">
                <Form.Group widths='equal'>
                    <Form.Field type='text' name='name' label='NAME' control='input'value={name}/>
                    <Form.Field label='EMAIL' name='email' control='input' value={email}/>
                    <Form.Field label='PHONE' name='phone' control='input'value={phone} />
                </Form.Group>
                
                <Form.Group>
                    <Form.Field label='SUMMARY' control='textarea' rows='3' />
                </Form.Group>

                <Form.Group>
                    <Form.Field label='TECHNICAL SKILLS' control='textarea' rows='1' />
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
                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>SUMMARY</h3>                
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>TECHNICAL SKILLS</h3>                
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>PROJECTS</h3>  
                                        <h4>Project1</h4> <br/>
                                        <h4>Project2</h4> <br/>              
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>EXPERIENCE</h3> 
                                        <h4>Company1</h4> <br/>
                                        <h4>Company2</h4> <br/>
                                    
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                </Grid.Row>
                                
                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h3>EDUCATION</h3> 
                                        <h4>School1</h4> <br/>
                                        <h4>School2</h4> <br/>               
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                                    </Grid.Column>
                                </Grid.Row>
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