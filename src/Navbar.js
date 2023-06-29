import { Link } from "react-router-dom";
import './Navbar.css';
import Button from '@mui/material/Button';
export default function Navbar() {
    return (
        
        <nav className = "nav">
            
            <div className="logo">
                <Link to = "/">
                    <Button hover>
                    <img src = {require('./logo.png')}/> 
                    </Button>
                    </Link>
        </div>
        <div className="links">

        <ul>
            <li>
            <Link to = "/"> Home </Link>
            </li>
            <li>
            <Link to = "/addBlog"> Add a Blog </Link>
            </li>
            <li>
            <Link to = "/displayBlog"> See Blogs </Link>
            </li>
            <li>
            <Link to = "/wiki"> Student Wiki </Link>
            </li>
        </ul>
        </div>

     </nav>
    )





}
