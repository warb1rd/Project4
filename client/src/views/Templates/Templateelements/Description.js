import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';

class Description extends Component {

    render(){
        const {content} = this.props
        return(                 
            <Grid.Row>
                <Grid.Column>
                    <p>{content}</p>
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid.Row>
            )
        }
    }
                                
export default Description