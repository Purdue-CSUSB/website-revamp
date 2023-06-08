import { useState, useEffect, React } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} from  "react-router-dom";
import Wiki from "./Wiki.js"; 


export function Blog() {


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [blog, setBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

/*   useEffect(() => {
    axios.get('http://localhost:5000/get-entries/')
    .then(res => setBlog(res.data))
    .catch(err => console.error(err));    
}, [blog]); */

  const addBlog = () => {
    if (title === "" || author === "" || content === "") {
      alert("Enter all data");
      return;
    }

    axios.post('http://localhost:5000/add-entry/', { name: title, author: author, content: content})
      .then((res) => (alert(res.data)))
      .catch((err) => (alert(err)));
    setTitle("");
    setAuthor("");
    setContent("");
  }

  const handleBlogSelect = (e) => {
    const c = e.target.value;
    setSelectedBlog(c);
  };
  return (

    
    <div className="body">
       <div className="column1">
        <div>
          <h3>Add a Blog Entry</h3>
          <p>Title</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <p>Author</p>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <p>Body</p>
          <textarea  rows={4} cols={40} value={content} onChange={(e) => setContent(e.target.value)}/>
          <br></br>
          <button onClick={addBlog}>Add Blog</button>
         
        </div>

    </div>
    
    </div>
    
  );
}