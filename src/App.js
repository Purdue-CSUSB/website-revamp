import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Navbar from "./Navbar";
import './App.css';

import Button from '@mui/material/Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  <Navbar />
  return (
    <div className = "body">
      
    </div>
  );
/*
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [selectedImage, setSelectedImage] = useState();

  const [blog, setBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogName, setBlogName] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

   useEffect(() => {
    /* if (selectedBlog) {
      axios.post("/get-blog", selectedBlog)
      .then(blogName => setBlogName(res.data))
    }  
    axios.get('http://localhost:5000/get-entries/')
    .then(res => setBlog(res.data))
    .catch(err => console.error(err));   
    console.log(blogName) 

}, [selectedBlog, blogName]); 

  const addBlog = () => {
    if (title === "" || author === "") {
      alert("Enter all data");
      return;
    }
    console.log(selectedFile);
    const formData = new FormData();
    formData.append('files', selectedImage)
    formData.append('files', selectedFile)
    formData.append('name', title)
    formData.append('summary', summary)
    formData.append('author', author)
   // formData.append('content', content)

    axios.post('http://localhost:5000/add-entry/', formData)
      .then((res) => (alert(res.data)))
      .catch((err) => (alert(err)));
    //setTitle("");
    //setAuthor("");

  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function makeButton(blog) {
    return (
        <Button 
            variant = "outlined"
            onClick={() => handleBlogSelect(blog._id)}> 
            {blog.name}
        </Button>
    );
}
  const handleBlogSelect = (e) => {
    console.log(e)
    setSelectedBlog(e);
    setBlogName(blog.find((code) => code._id === e));
  };

  const uploadImage = (e) => {

		setSelectedImage(e.target.files[0]);
    return;

	};

  const uploadFile = (e) => {
    setSelectedFile(e.target.files[0]);
    return;
  }

  return (
    <div className="body">
       <div className="column1">
        <div>
          <h3>Add a Blog Entry</h3>
          <p>Title</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <p>Author</p>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <p>Enter a brief summary</p>
          <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
          <p>Upload image</p>
          <input type = "file" name="file" onChange={uploadImage} />
          <p>Body</p>
          <input type = "file" name="file" onChange={uploadFile}/>
          <br></br><br></br>
          <Button variant = "outlined" onClick={addBlog}>Add Blog</Button>
        </div>
    </div>
    <div className="column2">
        <div>
          <h3>Select a Blog Entry</h3>
          <select onChange={handleBlogSelect}>
              <option value="">Select a blog...</option>
              {blog.map(blog => (
                <option value={blog._id}>{blog.name}</option>
              ))}
            </select>
        </div> 
        <div>
          <h3>displayed blogs</h3>
          {
            blog.map(makeButton, this)
            
          }
        </div>
        {blogName && <div>
          <h3>{blogName.name}</h3>
          <p>{blogName.summary}</p>
          <img src = {blogName.image} />
          <p>{<Document file= {blogName.content} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber = {2} />
            </Document>}
          </p>
        </div>} 
    </div> 
    </div>
    
    
  );
  */
}

export default App;
