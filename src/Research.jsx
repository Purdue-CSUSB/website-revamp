import React from "react";
import './Research.css';
import StickySideNav from "./StickySideNav";

function Research() {


    
    return (
        
        // <div>
        //     <h1>RESEARCH RESOURCES!</h1>

        //     <div>
        //         {/* sticky rr nav bar */}
        //         <StickySideNav />
        //     </div>

        //     <div className="video-container">
        //         {/* Add your embedded video code here */}
        //         <iframe width="660" height="335" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
        //     </div>

        //     <div className="quote">
        //         {/* <p style = {{ fontStyle: 'italic' }}>"Computer scientists are creative problem solvers, and those problems exist everywhere. Interested in agriculture? Curious about chemistry? Have a love of languages?  There are computer science problems to solve in all of those areas and beyond! 
        //         Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project on Purdue's campus."
        //         </p> -Amber Stanley (MA) */}
        //         {/* <p>-Amber Stanley (MA) </p> */}
        //         <p>
        //         <span style={{ fontStyle: 'italic' }}>
        //             "Computer scientists are creative problem solvers, and those problems exist everywhere. Interested in agriculture? Curious about chemistry? Have a love of languages? There are computer science problems to solve in all of those areas and beyond! Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project on Purdue's campus."
        //         </span>
                
        //         ~ Amber Stanley (MA)
        //         </p>
        //     </div>

        //     <div className="text">
        //         <p>Read more about Amber's thoughts on getting started with research <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/spushpa_purdue_edu/EZm7Z_PgrZlGmrzaz22eTakBxWx92LKsC73_Hp3ERQexaQ?rtime=1BPslF113Eg" target="_blank">here</a>.</p>
        //     </div>

        // </div>
        
        <div>
                
            {/* <h1>RESEARCH RESOURCES!</h1> */}
            <h1 style={{textAlign: 'center'}}>RESEARCH RESOURCES!</h1>
        
            <div className="research-container">

                {/* <h1>RESEARCH RESOURCES!</h1> */}
                {/* <div>
                    
                    <h1>RESEARCH RESOURCES!</h1>
                </div> */}
                <div className="side-nav">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <div className="video-container">
                        {/* Add your embedded video code here */}
                        <iframe width="660" height="335" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="quote">
                        <p>
                            <span style={{ fontStyle: 'italic' }}>
                                "Computer scientists are creative problem solvers, and those problems exist everywhere. Interested in agriculture? Curious about chemistry? Have a love of languages? There are computer science problems to solve in all of those areas and beyond! Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project on Purdue's campus."
                            </span>
                            ~ Amber Stanley (MA)
                        </p>
                    </div>
                    <div className="text">
                        <p>Read more about Amber's thoughts on getting started with research <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/spushpa_purdue_edu/EZm7Z_PgrZlGmrzaz22eTakBxWx92LKsC73_Hp3ERQexaQ?rtime=1BPslF113Eg" target="_blank">here</a>.</p>
                        <div className="main-content">
                    <div className="video-container">
                        {/* Add your embedded video code here */}
                        <iframe width="660" height="335" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="quote">
                        <p>
                            <span style={{ fontStyle: 'italic' }}>
                                "Computer scientists are creative problem solvers, and those problems exist everywhere. Interested in agriculture? Curious about chemistry? Have a love of languages? There are computer science problems to solve in all of those areas and beyond! Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project on Purdue's campus."
                            </span>
                            ~ Amber Stanley (MA)
                        </p>
                    </div>
                    <div className="text">
                        <p>Read more about Amber's thoughts on getting started with research <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/spushpa_purdue_edu/EZm7Z_PgrZlGmrzaz22eTakBxWx92LKsC73_Hp3ERQexaQ?rtime=1BPslF113Eg" target="_blank">here</a>.</p>
                    </div>
                </div>
                <div className="main-content">
                    <div className="video-container">
                        {/* Add your embedded video code here */}
                        <iframe width="660" height="335" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="quote">
                        <p>
                            <span style={{ fontStyle: 'italic' }}>
                                "Computer scientists are creative problem solvers, and those problems exist everywhere. Interested in agriculture? Curious about chemistry? Have a love of languages? There are computer science problems to solve in all of those areas and beyond! Anything you can imagine, any unanswered question you can fathom is likely being explored at some level through a research project on Purdue's campus."
                            </span>
                            ~ Amber Stanley (MA)
                        </p>
                    </div>
                    <div className="text">
                        <p>Read more about Amber's thoughts on getting started with research <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/spushpa_purdue_edu/EZm7Z_PgrZlGmrzaz22eTakBxWx92LKsC73_Hp3ERQexaQ?rtime=1BPslF113Eg" target="_blank">here</a>.</p>
                    </div>
                </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}
export default Research;