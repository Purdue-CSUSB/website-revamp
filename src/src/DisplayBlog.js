import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import axios from 'axios';
import './DisplayBlog.css';

import Button from '@mui/material/Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function DisplayBlog() {
    const [blog, setBlog] = useState([]);
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


}
export default DisplayBlog;