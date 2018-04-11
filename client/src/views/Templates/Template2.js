import React, { Component } from 'react';

class Template2 extends Component {
    render(){
        const {content} = this.props
        return(
            <div className="Template2">
                <div className="header">
                    <h2 className="name" value="NAME">{content.name}</h2>
                    <p>{content.email}<span>||</span><span>{content.phone}</span></p>
                </div>
                
                <div className="summary">
                    <h3>SUMMARY</h3>
                    <p>{content.summary}</p>
                </div>

                <div className="tech-skills">
                    <h3>TECHNICAL SKILLS</h3>
                    <p>{content.technical}</p>
                </div>

                <div className="projects">
                    <h3>PROJECTS</h3>
                    <h4>{content.title}</h4>
                    <p>{content.description}</p>

                </div>

                <div className="experience">
                    <h3>EXPERIENCE</h3>
                    <p>{content.company}</p>                    
                    <h4>{content.jobTitle} <span> {content.startDate} to {content.endDate}</span></h4>
                    <p>{content.details}</p>
              
                </div>

                <div className="education">
                    <h3>EDUCATION</h3>
                        <h4>{content.institution}</h4>
                            <p>{content.degree}<span> {content.graduationDate}</span></p>                      
                
                </div>
            </div>
        )
    }

}

export default Template2