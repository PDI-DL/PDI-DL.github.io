import { Link } from "react-router-dom";

import c3Logo from "../assets/logos/logo_c3.png";
import nautecLogo from "../assets/logos/logo_nautec-dark.png";
import furgLogo from "../assets/logos/logo_furg.png";

import "../style/components/Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="wrap container">
                <div className="footerInfo">
                    <span>Digital Image Processing and Machine Learning <b>Group</b> | {new Date().getFullYear()}</span>
                    <br/>
                    <span> Computer Science Center (<b>C3</b>) - Federal University of Rio Grande (<b>FURG</b>)</span>
                    <br />
                    <span><b>Address</b> av. Itália street, 96203-900 | Rio Grande - RS - Brazil</span>
                </div>
                <div className="footerLogos">
                    <div className="Logos">
                        <Link to="https://br.linkedin.com/company/centro-de-ci%C3%AAncias-computacionais---c3-furg" target="blank"><img src={c3Logo} alt="Computation Sciences Center logo" /></Link>
                        <Link to="https://nautec.furg.br/en/" target="blank"><img src={nautecLogo} className="nautec-logo" alt="Intelligent automation and robotics group" /></Link>
                        <Link to="https://www.furg.br/en/" target="blank"><img src={furgLogo} alt="Federal University of Rio Grande logo" /></Link>
                    </div>
                </div>          
            </div>
        </footer>
    )
}