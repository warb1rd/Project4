import React, { Component } from 'react';

class Template1 extends Component {
    render(){
        const {content} = this.props
        return(
            <div className="Template1">
                <div className="header">
                    <h2 className="name" value="NAME">{content.name}</h2>
                    <p> {content.email} <span> || </span><span> {content.phone} </span></p>
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
                    {/* <p>Company</p>                    
                    <h4>Title <span>, 10 Jan 2010 </span></h4>
                    <p>{content.phone}</p>                    */}
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

export default Template1