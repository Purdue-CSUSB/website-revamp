import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import axios from 'axios';
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  //const [content, setContent] = useState("");

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
    }  */
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

  const handleBlogSelect = (e) => {
    const c = e.target.value;
    console.log(c)
    setSelectedBlog(c);
    setBlogName(blog.find((code) => code._id === c));
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
          <p>Upload image</p>
          <input type = "file" name="file" onChange={uploadImage} />
          <p>Body</p>
          <input type = "file" name="file" onChange={uploadFile}/>
          <br></br><br></br>
          <button onClick={addBlog}>Add Blog</button>
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
        {blogName && <div>
          <h3>{blogName.name}</h3>
          <p>{<Document file= {blogName.content} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber = {2} />
            </Document>}
          </p>
        </div>} 
    </div> 
    </div>
    
    
  );
}

export default App;
