// StickySideNav.js

import React, { useState, useEffect } from 'react';
import './StickySideNav.css'; // Import CSS for styling
import { Link } from "react-router-dom";

const StickySideNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100 to your desired scroll position
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`side-nav ${isSticky ? 'sticky' : ''}`}>
      {/* Side nav content */}
      {/* <ul>
        <li>Intro Video</li>
        <li>FAQ</li>
        <li>Current Projects</li>
        <li>Undergraduate Research Computational Science Student Resources</li>
        <li>Research Orgs/Programs</li>
        <li>Presenting Your Research</li>
        <li>CS-Specific Research</li>
        <li>Calendar/Schedule</li>
      </ul> */}

      <li>
            <Link to = "/research"> Intro Video </Link>
            </li>
            <li>
            <Link to = "/faq"> FAQ </Link>
            </li>
            <li>
            <Link to = "/currentProjects"> Current Projects </Link>
            </li>
            <li>
            <Link to = "/urcssr"> Undergraduate Research Computational Science Student Resources </Link>
            </li>
            <li>
            <Link to = "/researchOrgs"> Research Orgs/Programs </Link>
            </li>
            <li>
            <Link to = "/presentingResearch"> Presenting Your Research </Link>
            </li>
            <li>
            <Link to = "/csSpecific"> CS-Specific Research </Link>
            </li>
            <li>
            <Link to = "/calendar"> Calendar </Link>
            </li>
           
            
    </div>
  );
};

export default StickySideNav;
