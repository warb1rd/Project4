import React from 'react';
import Template1 from './Template1.js';
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';

const Resume1 = (props) => {
    const {content} = this.props
    return(
        <div>
            {({
                Minimal: <Template1 content={content}  />,
                Lines: <Template2 content={content} />,
                Cool: <Template3 content={content} />,
                Rad: <Template4 content={content} />
            })[this.props.templateName]}
        </div>
    )
}

export default Resume1