import React from 'react';
import Template1 from './Template1.js';
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';

const Resume1 = () => {
    const {content} = this.props
    return(
        <div>
            {({
                Template1: <Template1 content={content}  />,
                Template2: <Template2 content={content} />,
                Template3: <Template3 content={content} />,
                Template4: <Template4 content={content} />
            })[this.props.templateName]}
        </div>
    )
}

export default Resume1