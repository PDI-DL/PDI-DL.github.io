import { Link } from "react-router-dom";

import pdiLogo from "../assets/logos/logo_pdi.png";
import githubLogo from "../assets/logos/github.png";
import linkedinLogo from "../assets/logos/linkedin.png";
import c3Logo from "../assets/logos/logo_c3.png";
import furgLogo from "../assets/logos/logo_furg.png";

function Header(){
  return(
    <header>
      <nav className="container">
        <div id="logo">
          <Link to="#">
            <img src={pdiLogo} alt="the laboratory's logo" />
            <span>PDI+DL</span>
          </Link>
        </div>
        <ul id="internal_links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
        <div id="external_links">
          <Link to="#"><img src={githubLogo} alt="GitHub logo" /></Link>
          <Link to="#"><img src={linkedinLogo} alt="LinkedIn logo" /></Link>
          <Link to="#"><img src={c3Logo} alt="Computation Sciences Center logo" /></Link>
          <Link to="#"><img src={furgLogo} alt="Federal University of Rio Grande logo" /></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header