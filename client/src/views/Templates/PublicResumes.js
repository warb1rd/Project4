import React, {Component} from 'react';

import httpClient from '../../httpClient.js';

class Templates extends Component {
    state = {
        // templateName: [Template1, Template2, Template3, Template4]  ,               //Maybe create images for all of the templates and display as image?
        resumes: [],
        makePublic: null
    }

    componentDidMount(){
        httpClient.getAllResumes().then((serverResponse) => {
            console.log(serverResponse.data)
            this.setState({
                resumes: serverResponse.data,
                makePublic: serverResponse.data[0].makePublic
            })
        })
    }

    //if statement inside map to check which template is being used
    render(){
        const {resumes} = this.state
        return(
            <div>
            <h1>LIST OF ALL RESUMES THAT'S 'MAKE PUBLIC'</h1>
                {resumes.map((r)=>{   
                    var startDate = new Date (r.experience[0].startDate);
                    var endDate = new Date (r.experience[0].endDate);
                    var graduationDate = new Date (r.education[0].graduationDate);     
                    if(r.makePublic === true) {           
                    return(
                        <div className="Template3" key={r._id}>                                                                  {/*CHANGE CLASSNAME DYNAMICALLY AS THE USER CLICKS ON DROPDOWN OPTIONS*/}
                            <div className="header">
                                <h2 className="name">{r.header.name}</h2>
                                <p>{r.header.email}<span>||</span><span>{r.header.phone}</span></p>
                            </div>
            
                            <div className="summary">
                                <h3>SUMMARY</h3>
                                <p>{r.summary}</p>
                            </div>

                            <div className="tech-skills">
                                <h3>TECHNICAL SKILLS</h3>
                                <p>{r.technical}</p>
                            </div>

                            <div className="projects">
                                <h3>PROJECTS</h3>
                                <h4>{r.projects[0].title}</h4>
                                <p>{r.projects[0].description}</p>
                            </div>

                            <div className="experience">
                                <h3>EXPERIENCE</h3>
                                <p>{r.experience[0].company}</p>                    
                                <h4>{r.experience[0].jobTitle} <span> {startDate && startDate.toLocaleDateString()} to {endDate && endDate.toLocaleDateString()}</span></h4>
                                <p>{r.experience[0].details}</p>
                             
                            </div>
                            <div className="education">
                                <h3>EDUCATION</h3>
                                    <h4>{r.education[0].institution}</h4>
                                        <p>{r.education[0].degree} <span> {graduationDate && graduationDate.toLocaleDateString()}</span></p>                      
                            </div>
                        
                        </div>           
                    ) }        
                })
            }
            </div>
        )
    }
}

export default Templates