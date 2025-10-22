import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import pdiLogo from "../assets/logos/logo_pdi.png";
import githubLogo from "../assets/logos/logo_github-dark.png";
import linkedinLogo from "../assets/logos/logo_linkedin-dark.png";
import huggingfaceLogo from "../assets/logos/logo_huggingface.png";

import "../style/components/Header.css";

export default function Header() {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("show");
    
    useEffect(() => {
        // Hamburger 
        const hamburger = document.getElementById("hamburger")
        
        var prevScroll = window.pageYOffset;
        
        window.onscroll = () => {
            var currentScroll = window.pageYOffset;
            if (currentScroll > prevScroll){ // Indo para baixo, não mostrar header
                setScrollDirection("dont-show")
                if (hamburger.querySelector("div").classList.contains("activate")) // Se menu estiver aberto, fechar
                hamburger.click()
            }
            else{ // Indo para cima, mostrar header
                setScrollDirection("show")
            }
            prevScroll = currentScroll;
        }
    }, []);
    
    const toggleHamburger = () => {
        setHamburgerActive(!hamburgerActive);
    };

    return (
        <header className={scrollDirection === "show" ? "show" : "dont-show"}>
            <nav>
                <div id="logo">
                    <Link to="/">
                        <img src={pdiLogo} alt="the laboratory's logo" />
                        <span>PDI+DL</span>
                    </Link>
                </div>
                <ul className = {hamburgerActive ? "internal-links show" : "internal-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/publications">Publications</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    {/* <li><Link to="/research">Research</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li> */}
                </ul>
                <div className="wraper-header">
                    <div id="external-links">
                        <Link to="https://github.com/PDI-DL" target="blank"><img src={githubLogo} className="github-logo" alt="GitHub logo" /></Link>
                        <Link to="#" target="blank"><img src={linkedinLogo} className="linkedin-logo" alt="LinkedIn logo" /></Link>
                        <Link to="https://huggingface.co/PDI-DL" target="blank"><img src={huggingfaceLogo} className="huggingface-logo" alt="Huggingface logo" /></Link>
                    </div>
                    <div id="hamburger" onClick={toggleHamburger}>
                        <div className={hamburgerActive ? "hamburger-line activate" : "hamburger-line"}></div>
                        <div className={hamburgerActive ? "hamburger-line activate" : "hamburger-line"}></div>
                        <div className={hamburgerActive ? "hamburger-line activate" : "hamburger-line"}></div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

// var prevScroll = window.pageYOffset; // Gets how many pixels from top of the page

// window.onscroll = () => {
//   var currentScroll = window.pageYOffset;

//   if (currentScroll < prevScroll) {
//     document.getElementsByTagName('header').style.top = "0"; // Show the navbar
//   } else {
//     rootElement = document.documentElement;
//     headerHeight = getComputedStyle(rootElement).getPropertyValue('--header-height');
//     document.getElementsByTagName('header').style.top = headerHeight; // Hide the navbar
//   }
//   console.log("Scroll ! ! ! ! !")
//   prevScroll = currentScroll; // Update the previous scroll position for the next scroll event
// }