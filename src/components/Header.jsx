import pdiLogo from "../assets/logo_pdi.png"
import githubLogo from "../assets/github.png"
import linkedinLogo from "../assets/linkedin.png"
import c3Logo from "../assets/logo_c3.png"
import furgLogo from "../assets/logo_furg.png"

import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <nav className="container">
                <div id="logo">
                    <Link to="#">
                        <img src= {pdiLogo} alt="the laboratory's logo" />
                        <span>PDI</span>
                    </Link>
                    
                </div>
                <ul id="internal_links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/publications">Publications</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/Research">Research</Link></li>
                    <li><Link to="/Calendar">Calendar</Link></li>
                </ul>
                <div id="external_links">
                    <Link to="#"><img src= {githubLogo} alt="Github logo" /></Link>
                    <Link to="#"><img src= {linkedinLogo} alt="Linkedin logo" /></Link>
                    <Link to="#"><img src= {c3Logo} alt="computation sciences center logo" /></Link>
                    <Link to="#"><img src= {furgLogo} alt="Federal university of Rio Grande logo" /></Link>
                </div>
            </nav>
        </header>
    );
}

export default Header

