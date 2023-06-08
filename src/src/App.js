import { useState, useEffect, React } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes} from  "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Wiki } from "./pages/Wiki";
import { Blog } from "./pages/Blog";


function App() {

  return ( 

    <>
    <nav>
      <ul>
        <li>
          <Link to = "/"> Home </Link>
        </li>
        <li>
          <Link to = "/blog"> Blog </Link>
        </li>
        <li>
          <Link to = "/wiki"> Student Wiki </Link>
        </li>
      </ul>

    </nav>
  
    <Routes>
      <Route path = "/" element={<Home />}  />
      <Route path = "/wiki" element={<Wiki />}  />
      <Route path = "/blog" element={<Blog />}  />
    <Route />
    </Routes>

    </>


  );

}

export default App;
