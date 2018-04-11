import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';

class Education extends Component {

    render(){
        const {content} = this.props
        return(
        <Grid.Row>
            <Grid.Column>
                <p>{content}</p>
            </Grid.Column>
            <Grid.Column>
                <h3>EDUCATION</h3>             
            </Grid.Column>
        </Grid.Row>           
        )
    }
}
                        
export default Education