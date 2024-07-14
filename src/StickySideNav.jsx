import './StickySideNav.css'; // Import CSS for styling
import { Link } from "react-router-dom";

const StickySideNav = () => {
  return (
    <div className='side-nav'>
      <div><Link to="/research"> Getting Started </Link></div>
      <div><Link to="/research/faq"> FAQ </Link></div>
      <div><Link to="/research/current-projects"> Current Projects </Link></div>
      <div><Link to="/research/urcssr"> URCSSR </Link></div>
      <div><Link to="/research/orgs-and-programs"> Organizations + Programs </Link></div>
      <div><Link to="/research/presenting"> Presenting Your Research </Link></div>
      <div><Link to="/research/cs-specific"> CS-Specific Research </Link></div>
      <div><Link to="/research/calendar"> Calendar </Link></div>
    </div>
  );
};

export default StickySideNav;
