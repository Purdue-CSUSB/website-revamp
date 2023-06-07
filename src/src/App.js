import { useState, useEffect, React } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} from  "react-router-dom";
import './App.css';
import Wiki from "./Wiki.js"; 


function App() {

  
  const navigate = useNavigate();
  const goToWiki = () => {
    navigate("./Wiki");
  }

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
          <button onClick={ goToWiki }>Student Wiki</button>

          <Routes>
              <Route path = "/wiki" element = { < Wiki /> } />
            </Routes>

        </div>

    </div>
    
{/*     <div className="column2">
        <div>
          <h3>Select a Blog Entry</h3>
          <select onChange={handleBlogSelect}>
              <option value="">Select a blog...</option>
              {blog.map(blog => (
                <option value={blog._id}>{blog.name}</option>
              ))}
            </select>
        </div> */}
        {/* {selectedBlog && <div>
          <h3>{selectedBlog.name}</h3>
          <p>{selectedBlog.content}</p>
        </div>} */}
    {/* </div> */}
    </div>
    
  );
}

export default App;
