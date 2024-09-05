import React from "react";
import { Stack } from "@mui/material";
import StickySideNav from "../StickySideNav";
import "../Research.css"
import './cs-specific.css';

function csSpecific() {


    return (
        <div>
            <Stack direction="row">
            <div className="side-content">
                <StickySideNav />
            </div>
            <div className="main-content">
                <h4> CS-Specific Research </h4>
                <div className='text'>
                    <p>Interested in doing undergraduate research related to your CS/DS/AI Degree but do not know where to start? Check out this list of helpful resources to learn more!</p>
                </div>


            <div className='research-with-prof' >

                <h3>
                    Undergraduate Research Opportunities with CS Professor
                        <a href="https://www.cs.purdue.edu/corporate/employment/cs%20research.html"> (Click here)
                            </a>
                </h3>

                <div className='text'>
                    <p> <strong> Description:</strong> An updated list of research projects with CS professors who are seeking undergraduate researchers.</p>
                </div>

                <div className='text'>
                     <p> <strong> How it can help:</strong>  If you already have an interest in a specific research area  or would like to work with a certain professor on a project.</p>
                </div>

            </div>


            <div className="cs-departmental-research-areas" >

                <h3>
                    CS Departmental Research Areas
                    <a href="https://www.cs.purdue.edu/research/index.html"> (Click here)
                        </a>
                </h3>

                    <div className='text'>
                        <p> <strong> Description:</strong> A summary of the 14 major research areas within the CS Department and the supporting faculty for each.</p>
                    </div>

                    <div className='text'>
                        <p> <strong> How it can help:</strong>  If you do not have a specific research area or professor in mind yet but want to explore all the options available in the Department.</p>
                    </div>

            </div>


            <div className="research-seminars" >

                <h3>
                        Research Seminars
                        <a href="https://www.cs.purdue.edu/research/seminars.html"> (Click here)
                            </a>
                        </h3>

                        <div className='text'>
                            <p> <strong> Description:</strong> An updated list of various CS-Related seminar series and colloquiums.</p>
                        </div>

                        <div className='text'>
                            <p> <strong> How it can help:</strong> If you want to hear about the latest CS Department research directly from faculty.</p>
                        </div>

                    </div>


            <div className="brightspace-page">

                <h3>
                        Computational Science Undergrad Research Brightspace Page
                            <a href="https://purdue.brightspace.com/d2l/login?sessionExpired=1&target=%2fd2l%2fle%2fcontent%2f910376%2fviewContent%2f13784501%2fView"> (Click here)
                                </a>
                    </h3>

                        <div className='text'>
                            <p> <strong> Description:</strong> A list of all the undergraduate research programs that offer CS-related projects.</p>
                        </div>

                        <div className='text'>
                            <p> <strong> How it can help:</strong> If you want an overview of all the possible CS-related research opportunities across the university .</p>
                        </div>
                    </div>


               


            <div className='questions'>
                <h3> 
                    Need More Help? Schedule an Appointment!
                </h3>
                <div className='text'>
                    <p> Still have some questions that were not answered on this page or in our FAQ Section?
                        <a href="https://calendly.com/csstudentaffairs"> Schedule an Appointment with Amber Stanley
                            </a>
                        </p>
                </div>
                
            </div>

         </div>
            </Stack>
    </div>
    );
}
export default csSpecific;