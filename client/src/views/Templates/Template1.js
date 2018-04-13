import React, { Component } from 'react';

class Template1 extends Component {
    render(){
        const {content} = this.props
        console.log(content)
        return(
            <div className="Template1">
                <div className="header">
                    <h2 className="name" value="name">{content.header.name}</h2>
                    <p> {content.header.email} <span> || </span><span> {content.header.phone} </span></p>
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
                    <h4>{content.projects[0].title}</h4>
                    <p>{content.projects[0].description}</p>

                </div>

                <div className="experience">
                    <h3>EXPERIENCE</h3>
                    <p>{content.experience[0].company}</p>                    
                    <h4>{content.experience[0].jobTitle} <span> {content.experience[0].startDate} to {content.experience[0].endDate}</span></h4>
                    <p>{content.experience[0].details}</p>
                    {/* <p>Company</p>                    
                    <h4>Title <span>, 10 Jan 2010 </span></h4>
                    <p>{content.phone}</p>                    */}
                </div>

                <div className="education">
                    <h3>EDUCATION</h3>
                        <h4>{content.education[0].institution}</h4>
                            <p>{content.education[0].degree}<span> {content.education[0].graduationDate}</span></p>                      
                
                </div>
            </div>
        )
    }
}

export default Template1