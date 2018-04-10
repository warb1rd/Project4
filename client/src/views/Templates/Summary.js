import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';
// import Template4 from './Template4.js'

class Summary extends Component {
    state = {
        summarry: this.props.summarry
    }
    //pass the handleClick event
    render(){
        const {summary} = this.state
        return(
                          
            <Grid.Row>
                <Grid.Column>
                    <p>{summary}</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>SUMMARY</h3>                
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Summary