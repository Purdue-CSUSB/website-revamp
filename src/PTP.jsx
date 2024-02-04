// ptp-landing
// import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';  // Import useState
import logo from "../src/images/logo.png"
import hobbybook from "../src/images/hobbies-books-2.jpeg"
import './PTP.css';
// import ProjectTemplateOverlay from './ProjectTemplateOverlay.jsx';
import PTPProjectTemplate from './PTPProjectTemplate.jsx';


const PTP = () => {
      const navigate = useNavigate(); 

      const [isProjectTemplateOpen, setIsProjectTemplateOpen] = useState(false);


      const openProjectTemplateModal = () => {
        console.log("user clicked on card");
        setIsProjectTemplateOpen(true);
        // // navigate('/ptp-project-template'); // Navigate to the modal
        // <ProjectTemplateOverlay /> // I think this isn't rendering because it has to be in return() statement
        // console.log("after <ProjectTemplateOverlay /> statement:");
      };

      
      const closeProjectTemplateModal = () => {
        console.log("user clicked on card");
        setIsProjectTemplateOpen(false);
        // // navigate('/ptp-project-template'); // Navigate to the modal
        // <ProjectTemplateOverlay /> // I think this isn't rendering because it has to be in return() statement
        // console.log("after <ProjectTemplateOverlay /> statement:");
      };

      // const handleCardClick = () => {
      //   console.log("Card clicked!");
      //   navigate('/ptp-project-template');
      // };
      return (
        <div>
          <div className='ptp-lp-headers'>
            <div className='ptp-lp-headers--main'>PURDUE TECHNICAL PROJECTS</div>
            <div className='ptp-lp-headers--motto'>Student-Created <span style={{ color: 'gold', fontSize: '12px', border: '5px' }}>&#9733;</span> Purdue-Related</div>
            
            <div className='ptp-lp-headers--desc'>We created this page to market student-created, Purdue-related projects! Our goals with PTP is to <b>promote students’ creativity </b>and <b>connect the student body with useful projects!</b></div>
          </div>
          {/* <button className='ptp-lp-submit-project-button'>Submit a project!</button> */}
          <button className='button-50'>SUBMIT A <br/> PROJECT!</button>

          <div className='search-and-filter'>
            

            {/* filter by tags */}

            <div className="filter-container">
              <div className="filter-heading">Filter by tags:</div>
              <div className="checkboxes">
                <label>
                  <input type="checkbox" value="academic" /> Academic
                </label>
                <label>
                  <input type="checkbox" value="social" /> Social
                </label>
                <label>
                  <input type="checkbox" value="recreational" /> Recreational
                </label>
                <label>
                  <input type="checkbox" value="dining" /> Dining
                </label>
              </div>
            </div>


            {/* search */}
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="button" className='button-50-search'>Search</button>
            </div>

          </div>

          <div className='cards'>

            <div className='row'>

              {/* <div className="card" onClick={() => navigate('/ptp-project-template')}> */}
              <div className="card" onClick={openProjectTemplateModal}>
                {/* Image on the left */}
                <img src = {hobbybook} alt="Card Image" className="card-image" />
                {/* Text on the right */}
                <div className="card-text" >
                  <h2 className='card-text-header'>Project 1</h2>
                  <p className='card-text-sub-header'>Here's a brief description of Project 1.</p>
                  <p className='card-text-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam."</p>
                </div>
              </div>

              <div className="card">
                {/* Image on the left */}
                <img src = {hobbybook} alt="Card Image" className="card-image" />
                {/* Text on the right */}
                <div className="card-text">
                <h2 className='card-text-header'>Project 1</h2>
                <p className='card-text-sub-header'>Here's a brief description of Project 1.</p>
                <p className='card-text-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam."</p>
                </div>
              </div>

            </div>

            <div className='row'>

              <div className="card">
                {/* Image on the left */}
                <img src = {hobbybook} alt="Card Image" className="card-image" />
                {/* Text on the right */}
                <div className="card-text">
                <h2 className='card-text-header'>Project 1</h2>
                <p className='card-text-sub-header'>Here's a brief description of Project 1.</p>
                <p className='card-text-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam."</p>
                </div>
              </div>

              <div className="card">
                {/* Image on the left */}
                <img src = {hobbybook} alt="Card Image" className="card-image" />
                {/* Text on the right */}
                <div className="card-text">
                <h2 className='card-text-header'>Project 1</h2>
                <p className='card-text-sub-header'>Here's a brief description of Project 1.</p>
                <p className='card-text-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam."</p>
                </div>
              </div>

            </div>

            <div className='row'>

              <div className="card">
                {/* Image on the left */}
                <img src = {hobbybook} alt="Card Image" className="card-image" />
                {/* Text on the right */}
                <div className="card-text">
                <h2 className='card-text-header'>Project 1</h2>
                <p className='card-text-sub-header'>Here's a brief description of Project 1.</p>
                <p className='card-text-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam."</p>
                </div>
              </div>

              <div className="card">
                {/* Image on the left */}
                <img src = {hobbybook} alt="Card Image" className="card-image" />
                {/* Text on the right */}
                <div className="card-text">
                <h2 className='card-text-header'>Project 1</h2>
                <p className='card-text-sub-header'>Here's a brief description of Project 1.</p>
                <p className='card-text-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam."</p>
                </div>
              </div>
            </div>
          </div>  
    
          {/* <div className="label">
            <p className="hi-i-m-sarah">
              <span className="text-wrapper">
                PURDUE TECHNICAL PROJECTS <br />
              </span>
              { <span className="span"> </span> }
              
            </p>
          </div> */}
           {/* Render the modal component */}
          {/* <ProjectTemplateOverlay /> */}
          {/* Conditionally render the modal overlay */}
          {isProjectTemplateOpen && (
            // <ProjectTemplateOverlay onClose={closeProjectTemplateModal} />
            <PTPProjectTemplate onClose={closeProjectTemplateModal} />
          )}
        </div>
        
      );
};

export default PTP;
