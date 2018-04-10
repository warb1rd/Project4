import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';

class Education extends Component {
    state = {
        Education: this.props.education
    }

    render(){
        return(
        <Grid.Row>
            <Grid.Column>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto </p>
            </Grid.Column>
            <Grid.Column>
                <h3>EDUCATION</h3> 
                <h4>School1</h4> <br/>
                <h4>School2</h4> <br/>               
            </Grid.Column>
            <Grid.Column>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto </p>
            </Grid.Column>
        </Grid.Row>           
        )
    }
}
                        
export default Education