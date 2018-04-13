import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class Template4 extends Component{
    render(){
        const {content} = this.props
        return(
            <div className="Template4">
                <div className="header">
                    <h2 className="name">{content.name}</h2>
                    <p>{content.email}<span>||</span><span>{content.phone}</span></p>
                </div>
                <Grid columns={2} divided>

                    <Grid.Row>
                        <Grid.Column>
                            <p>{content.summary}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>SUMMARY</h3>                
                        </Grid.Column>
                      
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <p>{content.technical}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>TECHNICAL SKILLS</h3>                
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <h4>{content.title}</h4>
                            <p>{content.description}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>PROJECTS</h3>  
                        </Grid.Column>
                        <Grid.Column>
                          
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <p>{content.company}</p>
                            <h5>{content.jobTitle}  <span> {content.startDate} to {content.endDate} </span> </h5><br/>
                            <p>{content.details}</p>                           
                        </Grid.Column>
                        <Grid.Column>
                            <h3>EXPERIENCE</h3> 
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column>
                            <p>{content.institution}<span>{content.graduationDate}</span></p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>EDUCATION</h3>                                   
                        </Grid.Column>
                        <Grid.Column>
                            <p>{content.degree}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
    
        )

    }
}

export default Template4
