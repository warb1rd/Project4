import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';

class GraduationDate extends Component {
    render(){
        const {content} = this.props

        return(
            <Grid.Row>
            <Grid.Column>
                <p>{content}</p>
            </Grid.Column>
            {/* <Grid.Column>
            </Grid.Column> */}
            </Grid.Row>
        )
    }
}
                        
export default GraduationDate