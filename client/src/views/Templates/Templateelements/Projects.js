import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';

class Projects extends Component {

    render(){
        const {content} = this.props
        return(                 
            <Grid.Row>
                <Grid.Column>
                    <p>{content}</p>
                </Grid.Column>
                <Grid.Column>
                    <h4>PROJECTS</h4>  
                </Grid.Column>
            </Grid.Row>
            )
        }
    }
                                
export default Projects