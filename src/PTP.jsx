// ptp-landing
// import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';  // Import useState
import logo from "../src/images/logo.png"
import hobbybook from "../src/images/hobbies-books-2.jpeg"
import './PTP.css';
// import ProjectTemplateOverlay from './ProjectTemplateOverlay.jsx';
import PTPProjectTemplate from './PTPProjectTemplate.jsx';


/* TODOS
 * add tags to each project card
  * some sort of icon and tag text
    * academic: U+1F3EB 🏫🎒
    * social: &#129489 🧑🏻‍🤝‍🧑🏿
    * recreational: 1F3C0 🏀
    * dining: 1F354 🍔
  * relevant color border?
 * add tag filter functionality
 * add search functionality
 * 

*/


const PTP = () => {
      const navigate = useNavigate(); 

      const [isProjectTemplateOpen, setIsProjectTemplateOpen] = useState(false);


      const openProjectTemplateModal = () => {
        console.log("user clicked on card");
        setIsProjectTemplateOpen(true);
      };

      
      const closeProjectTemplateModal = () => {
        console.log("user clicked on card");
        setIsProjectTemplateOpen(false);
      };


      const openLinkInNewTab = () => {
        window.open('https://forms.gle/i79juP31R87Jt6wh7', '_blank');
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
          <button className='button-50'onClick={openLinkInNewTab}>SUBMIT A <br/> PROJECT!</button>
          {/* <button className='button-50' onclick>SUBMIT A <br/> PROJECT!</button> */}
          {/* <a href="https://forms.gle/i79juP31R87Jt6wh7"> <button className='button-50'> SUBMIT A <br/> PROJECT!</button> </a>; */}

          <div className='search-and-filter'>
            

            {/* filter by tags */}

            <div className="filter-container">
              <div className="filter-heading">Filter by tags:</div>
              <div className="checkboxes">           
                <label style={{ color: 'purple' }}>
                  <input type="checkbox" value="academic" /> Academic
                </label>
                <label style={{ color: 'green' }}>
                  <input type="checkbox" value="social" /> Social
                </label>
                <label style={{ color: 'blue' }}>
                  <input type="checkbox" value="recreational" /> Recreational
                </label>
                <label style={{ color: 'brown' }}>
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
                  <p className='card-tag-recreational' span style={{ color: 'blue', fontSize: '15px', border: '5px' }}>🏀 Recreational </p>
                </div>
                {/* <div className='card-tag'>
                  <span style={{ color: 'gold', fontSize: '12px', border: '5px' }}>&#9733;</span>
                </div> */}
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
                  <p className='card-tag-social' span style={{ color: 'green', fontSize: '15px', border: '5px' }}>🧑🏻‍🤝‍🧑🏿 Social </p>
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
                  <p className='card-tag-academic' span style={{ color: 'purple', fontSize: '15px', border: '5px' }}>🏫 Academic </p>
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
                  <p className='card-tag-dining' span style={{ color: 'brown', fontSize: '15px', border: '5px' }}>🍔 Dining </p>
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
