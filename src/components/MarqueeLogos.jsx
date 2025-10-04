import Marquee from "react-fast-marquee";

import furgLogo from "../assets/logos/logo_furg.png";
import c3Logo from "../assets/logos/logo_c3.png";
import nautecLogo from "../assets/logos/logo_nautec-dark.png";
import itecLogo from "../assets/logos/logo_itec-dark.png";
import hydroneLogo from "../assets/logos/logo_hydrone.png";

import ufamLogo from "../assets/logos/logo_ufam.png";
import ufsmLogo from "../assets/logos/logo_ufsm.png";
import capesLogo from "../assets/logos/logo_capes.png";
import fapergsLogo from "../assets/logos/logo_fapergs.png";
import finepLogo from "../assets/logos/logo_finep.png";

import "../style/components/MarqueeLogos.css";

export default function MarqueeLogos() {
    return (
        <Marquee
            speed={30}
            autoFill={true}
            gradient={true}
            gradientColor={"var(--bg)"}
            gradientWidth={"var(--gradient)"}
            className="marquee-logos"
        >
            <img src={ufamLogo} alt="Federal University of Amazonas logo" />
            <img src={ufsmLogo} alt="Federal University of Santa Maria logo" />

            <img src={furgLogo} alt="Federal University of Rio Grande logo" />
            <img src={c3Logo} alt="Computation Sciences Center logo" />
            <img src={nautecLogo} className="nautec-logo" alt="Intelligent automation and robotics group" />
            <img src={itecLogo} className="itec-logo" alt="Institute of Technology and Computing logo" />
            <img src={hydroneLogo} alt="Hydrone project logo" />        

            <img src={capesLogo} alt="Coordination for the Improvement of Higher Education Personnel logo" />
            <img src={fapergsLogo} alt="Research Support Foundation of the State of Rio Grande do Sul logo" />
            <img src={finepLogo} alt="Financier of Studies and Projects logo" />
        </Marquee>
    )
}