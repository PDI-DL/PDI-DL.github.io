import { useState } from "react";
import { Link } from "react-router-dom";

import pdiLogo from "../assets/logos/logo_pdi.png";
import githubLogo from "../assets/logos/logo_github-dark.png";
import linkedinLogo from "../assets/logos/logo_linkedin-dark.png";

import "../style/components/Header.css";

function Header(){

    // Hamburger 
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const toggleHamburger = () => {
        setHamburgerActive(!hamburgerActive);
    };

    // Scroll on mobile
    const [scrollDirection, setScrollDirection] = useState('show');

    var prevScroll = window.pageYOffset;

    window.onscroll = () => {
        var currentScroll = window.pageYOffset;
        if (currentScroll > prevScroll){
            setScrollDirection('dontShow')
        }
        else{
            setScrollDirection('show')
        }
        prevScroll = currentScroll;
    }

    return(
        <header className={scrollDirection === "show" ? "show" : "dontShow"}>
            <nav>
                <div id="logo">
                    <Link to="/">
                        <img src={pdiLogo} alt="the laboratory's logo" />
                        <span>PDI+DL</span>
                    </Link>
                </div>
                <ul className = {hamburgerActive ? "internal_links show" : "internal_links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/publications">Publications</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/research">Research</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                </ul>
                <div id="external_links">
                    <Link to="#"><img src={githubLogo} id="github" alt="GitHub logo" /></Link>
                    <Link to="#"><img src={linkedinLogo} id="linkedin" alt="LinkedIn logo" /></Link>
                </div>
                <div id="hamburger" onClick={toggleHamburger}>
                    <div className={hamburgerActive ? "hamburgerLine activate" : "hamburgerLine"}></div>
                    <div className={hamburgerActive ? "hamburgerLine activate" : "hamburgerLine"}></div>
                    <div className={hamburgerActive ? "hamburgerLine activate" : "hamburgerLine"}></div>
                </div>
            </nav>
        </header>
    );
}

export default Header


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
