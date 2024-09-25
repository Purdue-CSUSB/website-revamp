import React from "react";
import Stack from "@mui/material/Stack";
import StickySideNav from "../StickySideNav";
import image1 from './images/presenting_1.jpeg';
import image2 from './images/presenting_2.jpg';
import "../Research.css"; // Assuming you will move styles here

function PresentingResearch() {
    return (
        <div>
            <Stack direction="row">
                <div className="side-content">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <h4>Interested in sharing your research?</h4>
                    <ul className="research-list">
                        <li>
                            Presenting your research is a great way to get feedback, connect with other researchers, and increase your exposure in academia. Here are some ways to do so at Purdue!
                        </li>
                        <li>
                            <h2>Undergraduate Research Conferences</h2>
                            <ul>
                                <li>
                                    <h3>Fall Undergraduate Research Expo</h3>
                                    <ul>
                                        <li>Nov. 19-26, 2024</li>
                                        <li>An excellent opportunity for undergraduate researchers to showcase their scholarly work and creative endeavors through poster presentations or research talks.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Spring Undergraduate Research Conference</h3>
                                    <ul>
                                        <li>April 8-15, 2025</li>
                                        <li>The largest showcase of undergraduate research at Purdue, featuring oral or poster presentations.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Summer Undergraduate Research Symposium</h3>
                                    <ul>
                                        <li>July 25, 2024</li>
                                        <li>An opportunity for undergraduate researchers to present their work through research talks or poster presentations.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>Journal of Purdue Undergraduate Research (JPUR)</h2>
                            <ul>
                                <li>Publish research snapshots or articles in JPUR to gain experience in scientific writing and share your work with a broader audience.</li>
                                <li>Submission deadlines:
                                    <ul>
                                        <li>Fall: Nov. 15</li>
                                        <li>Spring: Feb. 15</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>Undergraduate Research Seminar Series</h2>
                            <ul>
                                <li>Great resources to share your work, attend others' presentations, and connect with faculty projects.</li>
                                <li>Upcoming: Apr 24, 4pm - Marketing your undergraduate research experiences</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Need help with writing about your research?</h4>
                            <ul>
                                <li>Journal of Purdue Undergraduate Research - Tips for Authors</li>
                                <li>Purdue Online Writing Lab (OWL)</li>
                                <li>Research and Citation Resources</li>
                                <li>Writing scientific abstracts presentation</li>
                                <li>Writing a research paper</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="image-container">
                        <div className="image-frame">
                            <img src={image1} alt="Research Posters" className="image"/>
                            <div className="caption">Students presenting their research posters at the fall undergraduate research expo</div>
                        </div>
                        <div className="image-frame">
                            <img src={image2} alt="JPUR Cover Page" className="image"/>
                            <div className="caption">
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
