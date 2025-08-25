import { Link } from "react-router-dom";

import c3Logo from "../assets/logos/logo_c3.png";
import nautecLogo from "../assets/logos/logo_nautec.png";
import furgLogo from "../assets/logos/logo_furg.png";
import ufamLogo from "../assets/logos/logo_ufam.png"
import ufsmLogo from "../assets/logos/logo_ufsm.png"


function Footer(){
  return(
    <footer>
      <div className="container">
        <span>&copy; Digital Image Processing and Machine Learning | {new Date().getFullYear()}</span>
        <br />
        <br />
        <span><b>Address</b> C3 - Computer Science Center rooms: 218 and 214 | Brazil - Rio Grande - RS, 96203-900</span>
        <div className="footerLogos">
          <div className="headInstitutions">
            <h1>Institutions</h1>
            <Link to="#"><img src={c3Logo} alt="Computation Sciences Center logo" /></Link>
            <Link to="#"><img src={nautecLogo} alt="Intelligent automation and robotics group" /></Link>
            <Link to="#"><img src={furgLogo} alt="Federal University of Rio Grande logo" /></Link>
          </div>
          <div className="otherInstitutions">
            <h1>Partners</h1>
            <Link to="#"><img src={ufamLogo} alt="" /></Link>
            <Link to="#"><img src={ufsmLogo} alt="" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer