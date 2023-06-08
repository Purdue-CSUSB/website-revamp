import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {

    return <nav className = "nav">

        <ul>
            <li>
            <Link to = "/"> Home </Link>
            </li>
            <li>
            <Link to = "/blog"> Blog </Link>
            </li>
            <li>
            <Link to = "/wiki"> Student Wiki </Link>
            </li>
        </ul>

     </nav>





}
