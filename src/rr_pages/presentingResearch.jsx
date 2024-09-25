import React from "react";
import { Stack } from "@mui/material";
import StickySideNav from "../StickySideNav";
import image1 from './images/presenting_1.jpeg';
import image2 from './images/presenting_2.jpg';
import "../Research.css"

function PresentingResearch() {
    // const imageContainerStyle = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     marginTop: '20px',
    //     marginBottom: '20px'
    // };

    const imageFrameStyle = {
        // border: '2px solid #ccc',
        // padding: '10px',
        // margin: '10px',
        width: '40%'
    };

    const captionStyle = {
        fontSize: '14px',
        color: '#666',
        textAlign: 'center',
        marginTop: '10px'
    };

    const sectionStyle = {
        marginBottom: '20px',
        display: 'flex', 
        alignItems: 'flex-start',
    };

    const textContentStyle = {
        flex: 1, // Make the text take up the remaining space
        marginRight: '20px' // Space between text and image
    };

    const highlightStyle = {
        fontWeight: 'bold',
        color: '#0066cc'
    };

    return (
        <div>
            <Stack direction="row">
                <div className="side-content">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <h4>Share Your Research with the World!</h4>

                    <div style={sectionStyle}>
                        <div style = {textContentStyle}>
                            <p>Are you ready to present your research and gain valuable feedback from your peers? Whether you're aiming for an audience of fellow students, faculty, or professionals, there are numerous ways to showcase your work at Purdue. Here are some great options:</p>
                        </div>
                    </div>

                    <div style={sectionStyle}>
                        <div style={textContentStyle}>
                            <h5 style={{ marginTop: '-5px' }}><a href="https://www.purdue.edu/undergrad-research/conferences/index.php" >Undergraduate Research Conferences</a></h5>
                            These conferences are fantastic opportunities to present your research through poster presentations or talks. Get feedback, connect with other researchers, and gain experience in public speaking.
                            <p>
                                <span style={highlightStyle}>Fall Undergraduate Research Expo:</span> Nov. 19-26, 2024<br />
                                <span style={highlightStyle}>Spring Undergraduate Research Conference:</span> April 8-15, 2025<br />
                                <span style={highlightStyle}>Summer Undergraduate Research Symposium:</span> July 25, 2025<br />
                                {/* These conferences are fantastic opportunities to present your research through poster presentations or talks. Get feedback, connect with other researchers, and gain experience in public speaking. */}
                            </p>
                        </div>
                        
                        <div style={imageFrameStyle}>
                            <img src={image1} alt="Research Posters" style={{ width: '100%' }} />
                            <div style={captionStyle}>
                                Students presenting their research posters at the fall undergraduate research expo.
                            </div>
                        </div>
                    </div>

                    <div style={sectionStyle}>
                        <div style={textContentStyle}>
                            <h5><a href="https://docs.lib.purdue.edu/jpur/">Journal of Purdue Undergraduate Research (JPUR)</a></h5>
                            <p>Want to publish your work? The JPUR journal allows students to publish research snapshots or full articles, helping you share your findings with a wider audience.</p>
                            <p><span style={highlightStyle}>Deadlines:</span> Fall: Nov. 15 | Spring: Feb. 15</p>
                        </div>

                        <div style={imageFrameStyle}>
                            <img src={image2} alt="JPUR Cover Page" style={{ width: '100%', marginTop: '35px' }} />
                            <div style={captionStyle}>
                                Research article cover page in JPUR journal, vol 13. "Machine Learning of Big Data: A Gaussian Regression Model to Predict" by Jerry Gu.
                            </div>
                        </div>
                        
                    </div>

                    <div style={sectionStyle}>
                        <div style={textContentStyle}>
                            <h5><a href="https://www.purdue.edu/undergrad-research/seminar-series/index.php">Undergraduate Research Seminar Series</a></h5>
                            <p>This series offers a range of resources and opportunities to share your work, attend presentations, and learn how to effectively market your research experiences.</p>
                            <p><span style={highlightStyle}>Upcoming Event:</span> Apr 24, 4pm - "Marketing Your Undergraduate Research Experiences"</p>
                        </div>
                    </div>

                    <div style={sectionStyle}>
                        <div style={textContentStyle}>
                            <h5>Need Help with Research Writing?</h5>
                            <p>Writing about your research can be challenging, but these resources are here to help:</p>
                            <p>
                                <span style={highlightStyle}>Tips for Authors:</span> Journal of Purdue Undergraduate Research<br />
                                <span style={highlightStyle}>Purdue OWL:</span> Online Writing Lab<br />
                                <span style={highlightStyle}>Abstracts:</span> Learn how to craft a powerful abstract<br />
                                <span style={highlightStyle}>Writing a Research Paper:</span> Step-by-step guides to make the process easier
                            </p>
                        </div>
                    </div>
                </div>
            </Stack>
        </div>
    );
}

export default PresentingResearch;
