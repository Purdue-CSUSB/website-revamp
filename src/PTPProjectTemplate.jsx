//PTPProjectTemplate.jsx file
// import React from 'react';
import React, { useState } from 'react';  // Import useState
import './PTPProjectTemplate.css';
import dev1 from '../src/images/dev-1.png';
import dev2 from '../src/images/dev-2.png';
import dev3 from '../src/images/dev-3.png';
import expandbtn from '../src/images/expand.png'

const PTPProjectTemplate = ( {onClose} ) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const closeModal = () => {
    onClose(); // Close the modal
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/sarah-pushparaj/', '_blank');
  };

  return (
    // <div className="modal-overlay" onClick={closeModal}>
    //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <div className={`modal-overlay ${isExpanded ? 'expanded' : ''}`} onClick={closeModal}>
      <div className={`modal-content ${isExpanded ? 'expanded-content' : ''}`} onClick={(e) => e.stopPropagation()}>

        <div className='overlay-headers'>
          <h1 className='overlay-project-name'>NAME OF PROJECT</h1>
          {/* <button className="expand-button" onClick={toggleExpand}>
            {isExpanded ? 'Minimize' : 'Expand'}
          </button> */}
          <img
            src={expandbtn}
            alt={isExpanded ? 'Minimize' : 'Expand'}
            className="expand-button"
            onClick={toggleExpand}
          />
        </div>
        
        <div className="container">
          <div className="left-section">
        <h1>ALL ABOUT THE PROJECT</h1>

        <div className="video-container">
          {/* Add your embedded video code here */}
          <iframe width="660" height="335" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
        </div>

        <h2 className='what-header'>WHAT IS IT?</h2>
       
        <p className='what-desc'>"
        <span style={{ fontWeight: 'bold' }}>Some sort of main idea or header</span> <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>

          </div>

          <div className="right-section">
            <h1>ALL ABOUT THE DEVELOPER(S)</h1>

            <div className="developer-images">
              {/* Image 2 */}
              <div className="developer-image">
                <img src={dev1} alt="Developer 2" onClick = {openLinkedIn} />
                <div className="caption1">James Green</div>
                <div className="caption2">DS 23'</div>
              </div>

              {/* Image 2 */}
              <div className="developer-image">
                <img src={dev2} alt="Developer 2" onClick = {openLinkedIn}/>
                <div className="caption1">James Green</div>
                <div className="caption2">DS 23'</div>
              </div>
              
              {/* Image 3 */}
              <div className="developer-image">
                <img src={dev3} alt="Developer 3" onClick = {openLinkedIn}/>
                <div className="caption1">Sam Brown</div>
                <div className="caption2">AI '22</div>
              </div>
            </div>

            <h2>CREATIVE PROCESS</h2>
          
            <p className='creative-process-desc'>
            <span style={{ fontWeight: 'bold' }}>Some sort of main idea or header</span> <br/>
            Description of the creative process goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <h2>ADDITIONAL INFORMATION</h2>
            
            <p className='add-info-desc'>
            <span style={{ fontWeight: 'bold' }}>Some sort of main idea or header</span> <br/>
            Description of the creative process goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTPProjectTemplate;
