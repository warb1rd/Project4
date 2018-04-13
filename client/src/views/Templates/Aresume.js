import React, {Component} from 'react';
import Template1 from './Template1.js';
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';

class Resume1 extends Component {
    render(){
    const {content} = this.props
    console.log(content)
    return(
        <div>
            <p>HELLO</p>
            {({
                Minimal: <Template1 content={content}  />,
                Lines: <Template2 content={content} />,
                Cool: <Template3 content={content} />,
                Rad: <Template4 content={content} />
            })[this.props.templateName]}
        </div>
        )
    }
}

export default Resume1