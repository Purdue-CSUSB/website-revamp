
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';  // Import useState
import logo from "../src/images/logo.png"
import hobbybook from "../src/images/hobbies-books-2.jpeg"
import boilerbookings from "../src/images/boilerbookings.png"
import boilerbookings1 from "../src/images/boilerbookings1.png"
import boilerclasses from "../src/images/boilerclasses.png"
import boilerexams from "../src/images/boilerexams.png"
import boilerexams1 from "../src/images/boilerexams1.png"
import './PTP.css';
// import ProjectTemplateOverlay from './ProjectTemplateOverlay.jsx';
import PTPProjectTemplate from './PTPProjectTemplate.jsx';


const PTP = () => {

      const project = [
        {
          projectName: "BoilerBookings",
          subheader: "All-in-one travel platform",
          description: "BoilerBookings is an all-in-one platform for out-of-state students and travelers at Purdue to find the best shuttle and flight options, for now. Very soon, we plan to expand to various other forms of travel and introduce features to save you even more time and money.",
          tag: "TRAVEL",
          picture: boilerbookings1,
          whyfeature: "Because it would help all out-of-state students that learn about this project.",
          creativeproc: "We really just envisioned how we would want a travel website to look and work. But now, with dedicated developers and UI/UX designers, we can hopefully do a much better job in the near future.",
          addinfo: "",
          devinfo: "Arnav Kulkarni, CS, '26; Kushagr Khanna, CS, '27; Ethan Donahue, CS, '25; Jeremy Gilhart, ME, '26; Kevin Yu, CS, '25; Leyton Bostre, CS, '25; Nishaant Shah, CE, '27; Siddhanth Kumar, CS, '27; Neil Neil Van Eikema Hommes, CS, '27; Pradyun Kamaraju, CS, '26; Rithwik Erabelly, AAE, '26"
        },
        {
          projectName: "BoilerClasses",
          subheader: "A more user-friendly course catalog for Purdue students with blazing-fast search. ",
          description: "From 9000+ classes offered, students can find more engaging geneds, discover classes more aligned with their interests, and delve into specialized offerings.",
          tag: "SOCIAL",
          picture: boilerclasses,
          whyfeature: "Our source-code is fully open-source on GitHub and we're constantly looking to add more features to enhance the experience for students. We currently have a long feature list to implement, and we're looking for some open-source developers to help us in accomplishing this. We'd love to get this in front of as many Purdue CS students as possible!",
          creativeproc: "Surfing the current Purdue catalog is not exactly smooth — when we were looking to register for classes, we found that it was tough to find classes about specific topics we are interested in. Keeping this in mind, we decided to build a sleeker, faster, and more user-friendly alternative to the official catalog to help students explore the 9000+ courses offered at Purdue. Through feedback from the Purdue community, we've added a bunch of features since launching initially, and we hope to continue doing so. ",
          addinfo: ""
        },
        {
          projectName: "Boilerexams",
          subheader: "Helps students study for their classes",
          description: "Boilerexams is a website designed to help students study for their classes. Our relations team works with professors to get previous exams and practice exams to host on the site.",
          tag: "RECREATIONAL",
          picture: boilerexams1,
          whyfeature: "Boilerexams is a site used by many Purdue students within engineering. It would be awesome for us to expand our reach past just first year engineering and letting more incoming students learn about us!",
          creativeproc: "Each team in our organization meets weekly or biweekly to discuss progress, figure out future plans, and come up with new ideas. We work with professors to find features they think would be useful for themselves or students, and talk with students who are studying to find pain points in the site and bugs to fix.",
          addinfo: ""
        },
        {
          projectName: "Project 4",
          subheader: "Here's a brief description of Project 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          tag: "DINING",
          picture: hobbybook,
          whyfeature: "",
          creativeproc: "",
          addinfo: ""
        },
        // ... add more projects as needed
      ];
  
      

      const navigate = useNavigate(); 

      const [selectedTags, setSelectedTags] = useState([]);
      const [isProjectTemplateOpen, setIsProjectTemplateOpen] = useState(false);
      const [searchText, setSearchText] = useState('');
      const [hasSearchResults, setHasSearchResults] = useState(true); // Added state for search results
      const [selectedProject, setSelectedProject] = useState(null);



      const openProjectTemplateModal = (selectedProject) => {
        console.log("user clicked on card");
        setSelectedProject(selectedProject);
        setIsProjectTemplateOpen(true);
      };

      
      const closeProjectTemplateModal = () => {
        console.log("user clicked on card");
        setIsProjectTemplateOpen(false);
      };


      const openLinkInNewTab = () => {
        window.open('https://forms.gle/i79juP31R87Jt6wh7', '_blank');
      };

      const getColorForTag = (tag) => {
        switch (tag.toLowerCase()) {
          case 'academic':
            return 'purple';
          case 'social':
            return 'green';
          case 'recreational':
            return 'blue';
          case 'dining':
            return 'brown';
          case 'travel':
              return 'orange';
          default:
            return 'black';

        }
      };

      const handleTagFilterChange = (tag) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      };

      const filterProjects = () => {
        const filteredProjects = project.filter((project) => {
          // Filter by selected tags
          if (selectedTags.length > 0 && !selectedTags.includes(project.tag.toLowerCase())) {
            return false;
          }
      
          // Filter by search text
          const searchTextLower = searchText.toLowerCase();
          const includesSearchText = (text) => text.toLowerCase().includes(searchTextLower);
      
          if (
            !includesSearchText(project.projectName) &&
            !includesSearchText(project.subheader) &&
            !includesSearchText(project.description) &&
            !includesSearchText(project.tag)
          ) {
            return false;
          }
      
          return true;
        });
      
        setHasSearchResults(filteredProjects.length > 0);
      
        return filteredProjects;
      };
      
    
      const handleSearch = () => {
        filterProjects();
      };

      const handleSearchButtonClick = () => {
       
        
      };

      const filteredProjects = project.filter((project) => {
        // Filter by selected tags
        if (selectedTags.length > 0 && !selectedTags.includes(project.tag.toLowerCase())) {
          return false;
        }
    
        // Filter by search text
        const searchTextLower = searchText.toLowerCase();
        const includesSearchText = (text) => text.toLowerCase().includes(searchTextLower);

        if (
          !includesSearchText(project.projectName) &&
          !includesSearchText(project.subheader) &&
          !includesSearchText(project.description) &&
          !includesSearchText(project.tag)
        ) {
          return false;
          // successfulSearch = false;
        }
    
        return true;
      });

    
      return (
        <div>
           <div className='ptp-lp-headers'>
              <div className='ptp-lp-headers--main'>PURDUE TECHNICAL PROJECTS</div>
              <div className='ptp-lp-headers--motto'>Student-Created <span style={{ color: 'gold', fontSize: '12px', border: '5px' }}>&#9733;</span> Purdue-Related</div>
              <div className='ptp-lp-headers--desc'>We created this page to market student-created, Purdue-related projects! <br/>Our goals with PTP is to <b>promote students’ creativity </b>and <b>connect the student body with useful projects!</b></div>
            </div>

            <button className='button-50'onClick={openLinkInNewTab}>SUBMIT A <br/> PROJECT!</button>

            <div className='search-and-filter'>

              <div className="filter-container">
                <div className="filter-heading">Filter by tags:</div>
                <div className="checkboxes">           
                  <label style={{ color: 'purple' }}>
                    <input 
                      type="checkbox" 
                      value="academic" 
                      checked={selectedTags.includes('academic')}
                      onChange={() => handleTagFilterChange('academic')} 
                    /> {' '} 
                    Academic
                  </label>
                  <label style={{ color: 'green' }}>
                    <input 
                      type="checkbox" 
                      value="social" 
                      checked={selectedTags.includes('social')}
                      onChange={() => handleTagFilterChange('social')} 
                    /> {' '} 
                    Social
                  </label>
                  <label style={{ color: 'blue' }}>
                    <input 
                      type="checkbox" 
                      value="recreational" 
                      checked={selectedTags.includes('recreational')}
                      onChange={() => handleTagFilterChange('recreational')} 
                    /> {' '} 
                    Recreational
                  </label>
                  <label style={{ color: 'brown' }}>
                    <input 
                      type="checkbox" 
                      value="dining" 
                      checked={selectedTags.includes('dining')}
                      onChange={() => handleTagFilterChange('dining')} 
                    /> {' '} 
                    Dining
                  </label>
                  <label style={{ color: 'orange' }}>
                    <input 
                      type="checkbox" 
                      value="travel" 
                      checked={selectedTags.includes('travel')}
                      onChange={() => handleTagFilterChange('travel')} 
                    /> {' '} 
                    Dining
                  </label>
                </div>
              </div>

              {/* search */}
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchText}
                  onChange={ (e) => setSearchText(e.target.value)}
                />
                <button type="button" className='button-50-search' onClick={handleSearch} >Search</button>
              </div>
             
              {/* {!hasSearchResults && (
                <p className = "no-results-message" >Your search resulted in no projects</p>
              )} */}
              
                
            </div>
            {!hasSearchResults && (
                <p className = "no-results-message" >Your search resulted in no projects</p>
             )}

            <div className='cards'>
              <div className='row'>
                {filteredProjects.map((project, index) => (
                  <div className="card" key={index} onClick={() => openProjectTemplateModal(project)}>
                    <img src={project.picture} alt="Card Image" className="card-image" />
                    <div className="card-text">
                      <h2 className='card-text-header'>{project.projectName}</h2>
                      <p className='card-text-sub-header'>{project.subheader}</p>
                      <p className='card-text-desc'>{project.description}</p>
                      <p className={`card-tag-${project.tag.toLowerCase()}`} style={{ color: getColorForTag(project.tag) }}>{project.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {isProjectTemplateOpen && (
            // <ProjectTemplateOverlay onClose={closeProjectTemplateModal} />
             <PTPProjectTemplate onClose={closeProjectTemplateModal} project={selectedProject} />
           )}
        </div>
      );
          
};

export default PTP;