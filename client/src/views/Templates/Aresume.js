import React, { Component } from 'react';
import Template1 from './Template1.js';
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import Template4 from './Template4.js';

const Resume1 = () => {
    return(
        <div>
            {({
                Template1: <Template1 content={this.state}  />,
                Template2: <Template2 content={this.state} />,
                Template3: <Template3 content={this.state} />,
                Template4: <Template4 content={this.state} />
            })[this.props.templateName]}
        </div>
    )
}

export default Resume1