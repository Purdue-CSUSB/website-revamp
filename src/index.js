import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AddBlog from "./AddBlog";
import DisplayBlog from "./DisplayBlog";
import BlogPost from './BlogPost';
import Wiki from './Wiki';
import Initiatives from './Initiatives';
import ClubHub from './ClubHub';
import PTP from './PTP';
import International from "./International"
import CS193 from "./CS193"
import TownHall from "./TownHall"
import Mentorship from './Mentorship';
import Contact from './Contact';
import Research from './Research';
import StickySideNav from './StickySideNav';

import Calendar from './rr_pages/calendar';
import CSSpecific from './rr_pages/cs-specific';
import CurrentProjects from './rr_pages/currProjects';
import FAQ from './rr_pages/faq';
import PresentingResearch from './rr_pages/presentingResearch';
import ResearchOrgs from './rr_pages/researchOrgs';
import URCSSR from './rr_pages/urcssr';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/displayBlog" element={<DisplayBlog />} />
        <Route path="/blogPost" element={<BlogPost />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/clubhub" element={<ClubHub />} />
        <Route path="/ptp" element={<PTP />} />
        <Route path="/internationalstudentresources" element={<International />} />
        <Route path="/CS193" element={<CS193 />} />
        <Route path="/studentforum-townhall" element={<TownHall />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} />
      </Routes>

      <StickySideNav />
      <Routes>
        <Route exact path="/" element={<Research />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/csSpecific" element={<CSSpecific />} />
        <Route path="/currentProjects" element={<CurrentProjects />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/presentingResearch" element={<PresentingResearch />} />
        <Route path="/researchOrgs" element={<ResearchOrgs />} />
        <Route path="/urcssr" element={<URCSSR />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
