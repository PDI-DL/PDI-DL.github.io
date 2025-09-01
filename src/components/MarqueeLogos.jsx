import Marquee from "react-fast-marquee";

import c3Logo from "../assets/logos/logo_c3.png";
import nautecLogo from "../assets/logos/logo_nautec-dark.png";
import furgLogo from "../assets/logos/logo_furg.png";
import ufamLogo from "../assets/logos/logo_ufam.png";
import ufsmLogo from "../assets/logos/logo_ufsm.png";

import "../style/components/MarqueeLogos.css";

export function MarqueeLogos() {
    return (
        <Marquee
            speed={30}
            autoFill={true}
            gradient="200px"
            gradientColor={"var(--bg)"}
            className="marquee-logos"
        >
            <img src={furgLogo} alt="Federal University of Rio Grande logo" />
            <img src={c3Logo} alt="Computation Sciences Center logo" />
            <img src={nautecLogo} id="nautec-marquee" alt="Intelligent automation and robotics group" />
            <img src={ufamLogo} alt="Federal University of Amazonas logo" />
            <img src={ufsmLogo} alt="Federal University of Santa Maria logo" />
        </Marquee>
    )
}

export default MarqueeLogos;