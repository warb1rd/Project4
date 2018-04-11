import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';


class Technical extends Component { 
    render(){
        const {content} = this.props
        console.log(content)
        return(
            
            <Grid.Row>
                <Grid.Column>
                    <p>{content}</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>TECHNICAL SKILLS</h3>                
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Technical