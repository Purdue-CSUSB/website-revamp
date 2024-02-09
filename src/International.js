import React from "react";
import './International.css';
import Slide from '@mui/material/Slide';



function International() {



    return (
        
        
        <div> 
            

            <h1 class = 'ISP'> International Student Resources </h1>
            <p className="desc">This initiative aims to empower international students at Purdue by offering tailored career resources and guidance to address the distinctive challenges they encounter in securing internships and full-time employment opportunities. By focusing on their unique needs, we strive to enhance their overall experience and success during their time at the university..</p>
            <div className="container">
            <div className="left">
                <div className="intl">
                    <img src = {require('./images/ISP.png')}/> 
                </div>
            </div>
            <div className="right">
                <div className="tidbit">
                    <p className="tidbit-heading"><b>Careers Panel</b>
                    <p className="tidbit-desc">The International Student Panel is an initiative created by the CS Undergraduate Student Board to provide international students with resources and guidance as they navigate their time at Purdue. Our goal is to host a panel of international students who can talk about their experiences at Purdue and their professional experiences (getting internships/research opportunities)!</p>

                    </p>
                </div>
                <div className="tidbit">
                    <p className="tidbit-heading"><b>Networking Night</b>
                    <p className="tidbit-desc"> This event serves as a valuable platform, fostering connections between international students and companies eager to engage with diverse talent. By facilitating direct interactions, it promotes opportunities for students to explore potential employers interested in leveraging the unique skills and perspectives of international candidates. </p>
                    </p>
                </div>
                <div className="tidbit">
                    <p className="tidbit-heading"><b>Corporate Events</b>
                    <p className="tidbit-desc"> We have also hosted Corporate Events with companies like Accenture and Bloomberg to provide all students not just internationals with exclusive insights into industry trends, career paths, and networking opportunities. These sessions facilitated direct interactions with professionals, offering valuable perspectives and potential pathways for students to explore within these leading companies. </p>
                    </p>
                </div>
            </div>
            </div>
            <br></br>
            <br></br>
            
        </div>
        
    );


}
export default International;