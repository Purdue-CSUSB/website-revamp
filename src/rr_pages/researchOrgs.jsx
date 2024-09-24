import React from "react";
import StickySideNav from "../StickySideNav";
import Stack from '@mui/material/Stack';
import "../Research.css"

function researchOrgs() {
    return (
        <div>
            <Stack direction="row">
                <div className="side-content">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <h4>Research Organizations + Programs</h4>

                    <div>
                        <h5><a href="https://www.purdue.edu/undergrad-research/"> Office of Undergraduate Research (OUR) </a></h5>
                        <p>OUR provides a lot of great information on their webiste. A few places to start include the "Students” and "Conferences" tabs. 
                            You can also <a href="https://www.purdue.edu/undergrad-research/students/search-opportunities.php"> Search Opportunities </a> to find research opportunities available in the various colleges.</p>
                    </div>
                    <div>
                        <h5><a href="https://www.purdue.edu/undergrad-research/faculty/cure/index.php"> CURE-Purdue </a></h5>
                        <p>The CURE-Purdue Program aims to encourage the incorporation of research into new and existing courses 
                            through training and support in creating a course-based undergraduate research experience (CURE). 
                            CUREs offer more students opportunities to engage in research with a Purdue faculty/staff instructor for credit.</p>
                    </div>
                    <div>
                        <h5><a href="https://honors.purdue.edu/current-students/Undergraduate-Research/index.php"> John Martinson Honors College (JMHC) </a></h5>
                        <p>Students in the JMHC have access to many different resources and opportunities related to research -  
                            students may apply for grants, receive regular announcements about new research opportunities, 
                            and join communities that cultivate exeriential learning in different interdisciplinary themes. 
                            The <a href="https://honors.purdue.edu/current-students/Undergraduate-Research/Undergraduate%20Research%20Fellowship.php">Undergraduate Reseach Fellowship (URF) </a>
                            matches students with a faculty advisor and graduate student mentor to introduce them to STEM research at Purdue.
                            Some of these resources are also available students outside of the JMHC.</p>
                    </div>
                    <div>
                        <h5><a href="https://engineering.purdue.edu/Engr/Research/EURO"> Engineering Undergraduate Research Office (EURO) </a></h5>
                        <p>EURO provides more information on many undergraduate research opportunities at Purdue, including the
                            <a href="https://engineering.purdue.edu/Engr/Research/EURO/programs/ftr"> First Time Researcher (FTR) Fellowship</a> and the
                            <a href="https://engineering.purdue.edu/Engr/Research/EURO/students/about-SURF"> Summer Undergraduate Research Fellowship (SURF)</a>.
                        </p>
                    </div>
                    <div>
                        <h5><a href="https://www.purdue.edu/discoverypark/duri/about/index.php"> Discovery Undergraduate Interdiscipliniary Research Internship (DUIRI) </a></h5>
                        <p>The DUIRI program gives students the opportunity to get involved in research combining two or more disciplinary strengths in 
                            the innovative and entrepreneurial environment of Purdue's Discovery Park District.</p>
                    </div>
                    <div>
                        <h5><a href="https://www.purdue.edu/academics/ogsps/diversity/programs/summer-research-opportunities-program/index.php"> Summer Research Opportunities Program (SROP) </a></h5>
                        <p>The SROP is an 8-week program intended to give equal access and opportunities to underrepresented students, 
                            preparing participants for their graduate studies.</p>
                    </div>
                    <div>
                        <h5><a href="https://www.purdue.edu/summerstay/"> Summer Stay Scholars </a></h5>
                        <p>Through the Summer Stay Scholars program, students can combine coursework with a research or internship experience.</p>
                    </div>
                </div>
            </Stack>
        </div>
    );

}
export default researchOrgs;
