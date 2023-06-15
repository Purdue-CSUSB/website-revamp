import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

    return <nav className = "nav">

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

     </nav>





}