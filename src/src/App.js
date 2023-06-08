import { useState, useEffect, React } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Route, Routes} from  "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Wiki } from "./pages/Wiki";
import { Blog } from "./pages/Blog";


function App() {

  return ( 
  
    <Routes>
      <Route path = "/" element={<Home />}  />
      <Route path = "/wiki" element={<Wiki />}  />
      <Route path = "/blog" element={<Blog />}  />
    <Route />
    </Routes>





  );

}

export default App;
