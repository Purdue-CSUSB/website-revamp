import { useState, useEffect, React } from 'react';
import {Link} from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import axios from 'axios';
import './DisplayBlog.css';

import MuiButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import {brown} from "@mui/material/colors"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DisplayBlog() {

    const [blogs, setBlog] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogName, setBlogName] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const Button = styled(MuiButton)((props) => ({
      color: brown
    }));
    useEffect(() => {
        /* if (selectedBlog) {
          axios.post("/get-blog", selectedBlog)
          .then(blogName => setBlogName(res.data))
        }  */
        axios.get('http://localhost:5000/get-entries/')
        .then(res => setBlog(res.data))
        .catch(err => console.error(err));   
        console.log(blogName) 
    
    }, [selectedBlog, blogName]); 
    function makeButton(blog) {
      console.log(blogs.find((code) => code._id === blog._id))
      return (
        <div className='blogPost'>
        <Grid item = {10}>
          <Link to = "/blogPost"
          state= {{blog: blogs.find((code) => code._id === blog._id)}}
          >
          <Button 
              variant = "outlined">
              <figure class="item">
              <img src = {blog.image} />
              <figCaption className = "blogText">
                <div className = "title">
                {blog.name}
                </div>

                <div className = "summary">
                {blog.summary}
                </div>
              </figCaption> 
              </figure>
              
          </Button>
        </Link>
        </Grid>
        </div>
        
      );
  }
    return (
      <div className = "body">
      <div className = "container1">
      <h2>All Blog Posts</h2>
      <div className = "blogs">
        <Grid container spacing = {10} columns = {10}>
        {
              blogs.map(makeButton, this) 
          }
        </Grid>
        </div>
      </div>
          
      </div>
    )
}
export default DisplayBlog;