import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class Template4 extends Component{
    render(){
        const {content} = this.props
        return(
            <div className="Template4">
                <div className="header">
                    <h2 className="name">{content.header.name}</h2>
                    <p>{content.header.email}<span>||</span><span>{content.header.phone}</span></p>
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
                            <h4>{content.projects[0].title}</h4>
                            <p>{content.projects[0].description}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>PROJECTS</h3>  
                        </Grid.Column>
                        <Grid.Column>
                          
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <p>{content.experience[0].company}</p>
                            <h5>{content.experience[0].jobTitle}  <span> {content.experience[0].startDate} to {content.experience[0].endDate} </span> </h5><br/>
                            <p>{content.experience[0].details}</p>                           
                        </Grid.Column>
                        <Grid.Column>
                            <h3>EXPERIENCE</h3> 
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column>
                            <p>{content.education[0].institution}<span>{content.education[0].graduationDate}</span></p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>EDUCATION</h3>                                   
                        </Grid.Column>
                        <Grid.Column>
                            <p>{content.education[0].degree}</p>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
    
        )

    }
}

export default Template4
