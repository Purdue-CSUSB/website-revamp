import { Link } from "react-router-dom";
import './Navbar.css';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        
        <nav className = "nav">
            
            <div className="logo">
                <Link to = "/">
                    <Button className = "usbButton">
                    <img src = {require('./logo.png')}/> 
                    </Button>
                </Link>
        </div>
        <div className="links">
        <Button className="hamburger">M</Button>
        <ul>

            <li>
            <Link to = "/addBlog"> Add Stuff </Link>
            </li>
            <li>
            <Link to = "/displayBlog"> Humans of Purdue </Link>
            </li>
            <li>
            <Link to = "/wiki"> Student Wiki </Link>
            </li>

            <div class="dropdown">
                <button class="dropbtn"> Initiatives </button>
                <div class="dropdown-content">
                <li>
                    <Link to = "/Initiatives"> All Initiatives </Link>
                </li>
                <li>
                    <Link to = "/clubhub"> Club Hub </Link>
                </li>
                <li>
                    <Link to = "/ptp"> Purdue Technical Projects </Link>
                </li>
                <li>
                    <Link to = "/internationalstudentresources"> International Student Resources </Link>
                </li>
                <li>
                    <Link to = "/cs193"> CS 193 </Link>
                </li>
                <li>
                    <Link to = "/studentforum-townhall"> Student Forum and Town Hall </Link>
                </li>
                <li>
                    <Link to = "/mentorship-penpals"> Mentorship </Link>
                </li>
                <li>
                    <Link to = "/helproom"> Help Room </Link>
                </li>

                   
                </div>
             </div>
            <li>
                <Link to = "/contact"> Contact Us </Link>
            </li>
            <li>
                <Link to = "/about"> About </Link>
            </li>
        </ul>
        </div>

     </nav>
    )





}