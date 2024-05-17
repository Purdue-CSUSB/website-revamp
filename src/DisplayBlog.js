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

    const [student, setStudent] = useState(false);
    const [faculty, setFaculty] = useState(false);
    const [interviews, setInterviews] = useState(false);
    const [blogChecked, setBlogCategory] = useState(false);

    let checked = [student, faculty, interviews, blogChecked]
    const Button = styled(MuiButton)((props) => ({
      color: brown
    }));

   
    useEffect(() => {
        /* if (selectedBlog) {
          axios.post("/get-blog", selectedBlog)
          .then(blogName => setBlogName(res.data))
        }  */
        axios.get('http://localhost:4000/get-entries/')
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
          sx = {{
            color: 'black'
          }}
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

  const checkedBox = (event) => {

        if (event.target.value === "student") {
            setStudent(event.target.checked);
        }
        else if (event.target.value == "faculty") {
            setFaculty(event.target.checked);
        }
        else if (event.target.value == "interviews") {
            setInterviews(event.target.checked);
        }
        else {
          setBlogCategory(event.target.checked);
        }
    }
    return (
      <div className = "body">
        <div className = "container1">
          <h2>Humans of Purdue CS</h2>
          <h3>Hear from the Awesome Student and Faculty at Purdue!</h3>
          <p>The Purdue University Computer Science department, being one of the largest within the university, boasts a diverse and extensive pool of students, professors, and faculty with varied backgrounds. Our objective is to showcase the distinct stories and experiences of department members, providing a comprehensive understanding of our collective identity and accomplishments. By shining a spotlight on the unique experiences, passions, and backgrounds of those in the CS/DS/AI department, Purdue USB hopes to foster a greater sense of community, understanding, and collaboration within the department and beyond.</p>
          <hr></hr>
          <div className = "content">
            <div className='category-filter'>
                <div className = "category">
                        <p> Students </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "students"
                                onChange = {checkedBox}
                            />
                        </label>
                </div>
                <div className = "category">
                        <p> Faculty </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "faculty"
                                onChange = {checkedBox}
                            />
                        </label>
                </div>
                <div className = "category">
                        <p> Interviews </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "interviews"
                                onChange = {checkedBox}
                            />
                        </label>
                </div>
                <div className = "category">
                        <p> Blog </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "blog"
                                onChange = {checkedBox}
                            />
                        </label>
                </div>
            </div>
            
          <div className = "blog_scroll">
            <div className = "blogs">
            <Grid container spacing = {10} columns = {10}>
            {
                  blogs.map(makeButton, this) 
              }
            </Grid>
            </div>
          </div>
          </div>
          
        
      </div>
          
      </div>
    )
}
export default DisplayBlog;