import React from "react";
import './Research.css';
import StickySideNav from "./StickySideNav";
import Stack from '@mui/material/Stack';

function Research() {
    return (
        <div>
            <Stack direction="row">
                <div className="side-content">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <h4>Research Resources</h4>
                    <div>
                        {/* Add your embedded video code here */}
                        <iframe width="660" height="335" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>
                        <p>
                            Hear from faculty, staff, and students in the CS Department about doing research.
                        </p>
                        <blockquote>
                            <i>"Computer scientists are creative problem solvers, and those problems exist everywhere. Interested in agriculture? Curious about chemistry? Have a love of languages? There are computer science problems to solve in all of those areas and beyond! Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project on Purdue's campus." </i>
                            - Amber Stanley, Undergraduate Programs Specialist
                        </blockquote>
                        <p>
                            Read more about Amber's thoughts on getting started with research <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/spushpa_purdue_edu/EZm7Z_PgrZlGmrzaz22eTakBxWx92LKsC73_Hp3ERQexaQ?rtime=1BPslF113Eg" target="_blank">here</a>.
                        </p>
                    </div>
                </div>
            </Stack>
        </div>
    );
}
export default Research;