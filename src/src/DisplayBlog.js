import { useState, useEffect, React } from 'react';
import {Link} from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import axios from 'axios';
import './DisplayBlog.css';

import Button from '@mui/material/Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DisplayBlog() {
    const [blogs, setBlog] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogName, setBlogName] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
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
        <Link to = "/blogPost"
          state= {{blog: blogs.find((code) => code._id === blog._id)}}
          >
          <Button 
              variant = "outlined">
              {blog.name}
          </Button>
        </Link>
      );
  }
    const handleBlogSelect = (e) => {
      console.log(e)
      setSelectedBlog(e);
      setBlogName(blogs.find((code) => code._id === e));
    };
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
      <div className = "body">
      <h3>displayed blogs</h3>
        <div className = "blogs">
          {
              blogs.map(makeButton, this)
          }
        </div>
          
      </div>
    )
}
export default DisplayBlog;