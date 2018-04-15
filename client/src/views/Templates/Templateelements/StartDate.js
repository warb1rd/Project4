import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';

class StartDate extends Component {
    render(){
        const {content} = this.props

        return(
            <Grid.Row>
            <Grid.Column>
                <p></p>                
                <p>{content}</p>
            </Grid.Column>
            <Grid.Column>
                <h5></h5> 
            </Grid.Column>
            </Grid.Row>
        )
    }
}
                        
export default StartDate