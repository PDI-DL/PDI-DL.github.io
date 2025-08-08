import pdiLogo from "./assets/logo_pdi.png"
import githubLogo from "./assets/github.png"
import linkedinLogo from "./assets/linkedin.png"
import c3Logo from "./assets/logo_c3.png"
import furgLogo from "./assets/logo_furg.png"

function Header(){
    return(
        <header>
            <nav className="container">
                <div id="logo">
                    <a href="#">
                        <img src= {pdiLogo} alt="the laboratory's logo" />
                        <span>PDI</span>
                    </a>
                    
                </div>
                <ul id="internal_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Publications</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Calendar</a></li>
                </ul>
                <div id="external_links">
                    <a href="#"><img src= {githubLogo} alt="Github logo" /></a>
                    <a href="#"><img src= {linkedinLogo} alt="Linkedin logo" /></a>
                    <a href="#"><img src= {c3Logo} alt="computation sciences center logo" /></a>
                    <a href="#"><img src= {furgLogo} alt="Federal university of Rio Grande logo" /></a>
                </div>
            </nav>
        
        </header>
    );
}

export default Header

