import { Link } from "react-router-dom";

import c3Logo from "../assets/logos/logo_c3.png";
import nautecLogo from "../assets/logos/logo_nautec-dark.png";
import furgLogo from "../assets/logos/logo_furg.png";
import ufamLogo from "../assets/logos/logo_ufam.png"
import ufsmLogo from "../assets/logos/logo_ufsm.png"

import "../style/components/Footer.css";

function Footer(){
    return(
        <footer>
            <div className="wrap">
                <div className="footer_info">
                    <span>Digital Image Processing and Machine Learning <b>Research Group</b> | {new Date().getFullYear()}</span>
                    <br/>
                    <br/>
                    {/* <span><b>Address</b> C3 - Computer Science Center rooms: 218 and 214 | Brazil - Rio Grande - RS, 96203-900</span> */}
                    <span> Computer Science Center (<b>C3</b>) - Federal University of Rio Grande (<b>FURG</b>)</span>
                    <br />
                    <br />
                    <span><b>Address</b> av. Itália street, 96203-900 | Rio Grande - RS - Brazil</span>
                </div>
                <div className="footerLogos">
                    <h1>Institutions</h1>
                    <Link to="#"><img src={c3Logo} alt="Computation Sciences Center logo" /></Link>
                    <Link to="#"><img src={nautecLogo} id="nautec" alt="Intelligent automation and robotics group" /></Link>
                    <Link to="#"><img src={furgLogo} alt="Federal University of Rio Grande logo" /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
