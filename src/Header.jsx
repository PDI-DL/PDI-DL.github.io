

function Header(){
    return(
        <header>
            <nav className="container">
                <div id="logo">
                    <a href="#">
                        <img src="./logo_pdi.png" alt="the laboratory's logo" />
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
                    <a href="#"><img src="./github.png" alt="Github logo" /></a>
                    <a href="#"><img src="./linkedin.png" alt="Linkedin logo" /></a>
                    <a href="#"><img src="./logo_c3.png" alt="computation sciences center logo" /></a>
                    <a href="#"><img src="./logo_furg.png" alt="Federal university of Rio Grande logo" /></a>
                </div>
            </nav>
        
        </header>
    );
}

export default Header

