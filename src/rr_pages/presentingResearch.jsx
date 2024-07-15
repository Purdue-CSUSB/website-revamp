import React from "react";
import { Stack } from "@mui/material";
import StickySideNav from "../StickySideNav";

function PresentingResearch() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '80%',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6'
    };

    const textContainerStyle = {
        width: '60%',
        textAlign: 'left'
    };

    const imageContainerStyle = {
        width: '35%',
        textAlign: 'center'
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#333'
    };

    const ulStyle = {
        listStyleType: 'none',
        paddingLeft: '0'
    };

    const nestedUlStyle = {
        paddingLeft: '20px'
    };

    const liStyle = {
        marginBottom: '10px'
    };

    const imageFrameStyle = {
        border: '2px solid #ccc',
        padding: '10px',
        margin: '10px 0'
    };

    const captionStyle = {
        fontSize: '14px',
        color: '#666'
    };

    return (
        <div>
            <Stack direction="row">
                <div className="side-content"><StickySideNav /></div>
                <div className="main-content" style={containerStyle}>
                    <div style={textContainerStyle}>
                        <h4>Interested in sharing your research?</h4>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Presenting your research is a great way to get feedback, connect with other researchers, and increase your exposure in academia. Here are some ways to do so at Purdue!</li>
                            <li style={liStyle}>
                                <h2 style={headerStyle}>Undergraduate Research Conferences</h2>
                                <ul style={nestedUlStyle}>
                                    <li style={liStyle}>
                                        <h3 style={headerStyle}>Fall Undergraduate Research Expo</h3>
                                        <ul style={nestedUlStyle}>
                                            <li style={liStyle}>Nov. 19-26, 2024</li>
                                            <li style={liStyle}>An excellent opportunity for undergraduate researchers to showcase the scholarly work and creative endeavors they have been engaged in through poster presentations or research talks.</li>
                                        </ul>
                                    </li>
                                    <li style={liStyle}>
                                        <h3 style={headerStyle}>Spring Undergraduate Research Conference</h3>
                                        <ul style={nestedUlStyle}>
                                            <li style={liStyle}>April 8-15, 2025</li>
                                            <li style={liStyle}>The largest showcase of undergraduate research at Purdue. This judged event highlights the scholarly work and creative endeavors undergraduate students have been engaged in through oral or poster presentations.</li>
                                        </ul>
                                    </li>
                                    <li style={liStyle}>
                                        <h3 style={headerStyle}>Summer Undergraduate Research Symposium</h3>
                                        <ul style={nestedUlStyle}>
                                            <li style={liStyle}>July 25, 2024</li>
                                            <li style={liStyle}>An opportunity for undergraduate researchers, especially those staying at Purdue during the summer, to showcase the scholarly endeavors they have been engaged in through research talks or poster presentations.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li style={liStyle}>
                                <h2 style={headerStyle}>Journal of Purdue Undergraduate Research (JPUR)</h2>
                                <ul style={nestedUlStyle}>
                                    <li style={liStyle}>Researchers can publish a research snapshot or article to the JPUR journal. This is a great opportunity to learn how to write scientifically and convey scientific topics to a broader audience.</li>
                                    <li style={liStyle}>Submission deadlines:</li>
                                    <ul style={nestedUlStyle}>
                                        <li style={liStyle}>Fall: Nov. 15</li>
                                        <li style={liStyle}>Spring: Feb. 15</li>
                                    </ul>
                                </ul>
                            </li>
                            <li style={liStyle}>
                                <h2 style={headerStyle}>Undergraduate Research Seminar Series</h2>
                                <ul style={nestedUlStyle}>
                                    <li style={liStyle}>This program contains great resources on different opportunities to share your work, attend the presentations of others, and connect with faculty projects.</li>
                                    <li style={liStyle}>Upcoming: Apr 24, 4pm - Marketing your undergraduate research experiences</li>
                                </ul>
                            </li>
                            <li style={liStyle}>
                                <h4>Need help with writing about your research?</h4>
                                <ul style={nestedUlStyle}>
                                    <li style={liStyle}>Journal of Purdue Undergraduate Research - Tips for Authors</li>
                                    <li style={liStyle}>Purdue Online Writing Lab (OWL)</li>
                                    <li style={liStyle}>Research and Citation Resources</li>
                                    <li style={liStyle}>Abstracts</li>
                                    <li style={liStyle}>Writing scientific abstracts presentation</li>
                                    <li style={liStyle}>Writing a research paper</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div style={imageContainerStyle}>
                        <div style={imageFrameStyle}>
                            {/* Placeholder for the first image */}
                            <img src="path/to/your/image1.jpg" alt="Research Posters" style={{ width: '100%' }} />
                            <div style={captionStyle}>Students presenting their research posters at the fall undergraduate research expo</div>
                        </div>
                        <div style={imageFrameStyle}>
                            {/* Placeholder for the second image */}
                            <img src="path/to/your/image2.jpg" alt="JPUR Cover Page" style={{ width: '100%' }} />
                            <div style={captionStyle}>
                                Research article cover page in JPUR journal, vol 13. "Machine Learning of Big Data: A Gaussian Regression Model to Predict" by Jerry Gu (purdue.edu)
                            </div>
                        </div>
                    </div>
                </div>
            </Stack>
        </div>
    );
}

export default PresentingResearch;
