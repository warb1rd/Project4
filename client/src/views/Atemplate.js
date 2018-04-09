import React, { Component } from 'react';
import '../stylesheets/aTemplate.css'

class Atemplate extends Component {
    render(){
        return(
            <div className="Template-container">
                <div className="header">
                    <h2 className="name">GANDALF</h2>
                    <p>gandalf@istar.com<span>||</span><span>1159</span></p>
                </div>
                
                <div className="summary">
                    <h3>SUMMARY</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                </div>

                <div className="tech-skills">
                    <h3>TECHNICAL SKILLS</h3>
                    <p>This, that, and that, and this, and those etc etc etc.</p>
                </div>

                <div className="projects">
                    <h3>PROJECTS</h3>
                    <h4>Title</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                    <h4>Title</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                    <h4>Title</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                </div>

                <div className="experience">
                    <h3>EXPERIENCE</h3>
                    <p>Company</p>                    
                    <h4>Title <span> 21 Mar 2008</span></h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                    <p>Company</p>                    
                    <h4>Title <span> 10 Jan 2010 </span></h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>                   
                </div>

                <div className="education">
                    <h3>EDUCATION</h3>
                        <h4>Title</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                        <h4>Title</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                        <h4>Title</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint, aliquid dolorum perspiciatis consectetur accusantium architecto eligendi ducimus eaque exercitationem. A officia nostrum natus distinctio hic similique at corrupti? Facere?</p>
                
                </div>
            </div>
        )
    }
}

export default Atemplate