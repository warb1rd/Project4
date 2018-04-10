import React, {Component} from 'react';
import { Form , Button, Grid } from 'semantic-ui-react';
// import Template4 from './Template4.js'

class Summary extends Component {
    //pass the handleClick event
    render(){
        const {content} = this.props
        console.log(content)
        return(
                          
            <Grid.Row>
                <Grid.Column>
                    <p>{content}</p>
                </Grid.Column>
                <Grid.Column>
                    <h3>SUMMARY</h3>                
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Summary