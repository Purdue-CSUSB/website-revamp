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
import PTP from './PTP.jsx';
import International from "./International"
import CS193 from "./CS193"
import TownHall from "./TownHall"
import Mentorship from './Mentorship';


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
        <Route exact path="/" element ={<Landing />} />
        <Route path = "/wiki" element={<Wiki />}  />
        <Route path="/addBlog" element={<AddBlog/>} />
        <Route path = "/displayBlog" element = {<DisplayBlog/>} />
        <Route path = "/blogPost" element = {<BlogPost/>} />
        <Route path = "/initiatives" element = {<Initiatives/>} />
        <Route path = "/clubhub" element =  {<ClubHub/>}/>
        <Route path = "/ptp" element =  {<PTP/>}/>
        <Route path = "/internationalstudentresources" element = {<International/>}/>
        <Route path = "/CS193" element =  {<CS193/>}/>
        <Route path = "/studentforum-townhall" element =  {<TownHall/>}/>
        <Route path = "/mentorship" element =  {<Mentorship/>}/>


        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
