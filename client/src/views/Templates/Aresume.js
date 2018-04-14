import React, {Component} from 'react';
import Template1 from './Template1.js';
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';
import httpClient from '../../httpClient.js'

class Aresume extends Component {
    state= {
        templateName: null,
        content: null
    }

    componentDidMount(){
        const resumeId = this.props.match.params.id
        httpClient.getResume(resumeId).then((apiResponse) => {
            this.setState({
                content:apiResponse.data, 
                templateName: apiResponse.data.templateName
            })
        })
    }
    
    render(){
    const {content} = this.state
    const templateOptions = [
        {text:'Minimal', value: "Template1"},
        {text:"Lines", value: "Template2"},
        {text:"Cool", value: "Template3"},
        {text:"Rad", value: "Template4"}
    ]
    console.log(content)
    return(
        <div>
            {content && ({
                Minimal: <Template1 content={content}  />,
                Lines: <Template2 content={content} />,
                Cool: <Template3 content={content} />,
                Rad: <Template4 content={content} />
            })[this.state.templateName]}
        </div>
        )
    }
}

export default Aresume