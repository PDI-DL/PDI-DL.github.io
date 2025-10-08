import Marquee from "react-fast-marquee";

import ufamLogo from "../assets/logos/logo_ufam.png";
import ufsmLogo from "../assets/logos/logo_ufsm.png";
import furgLogo from "../assets/logos/logo_furg.png";
import c3Logo from "../assets/logos/logo_c3.png";
import nautecLogo from "../assets/logos/logo_nautec-dark.png";
import itecLogo from "../assets/logos/logo_itec-dark.png";
import hydroneLogo from "../assets/logos/logo_hydrone.png";
import bevlogLogo from "../assets/logos/logo_bevlog-dark.png"
import capesLogo from "../assets/logos/logo_capes.png";
import fapergsLogo from "../assets/logos/logo_fapergs.png";
import finepLogo from "../assets/logos/logo_finep.png";

import "../style/components/MarqueeLogos.css";

export default function MarqueeLogos() {
    const logos = [
        { image: ufamLogo, className: "ufam-logo", alt: "Federal University of Amazonas logo" },
        { image: ufsmLogo, className: "ufsm-logo", alt: "Federal University of Santa Maria logo" },
        { image: furgLogo, className: "furg-logo", alt: "Federal University of Rio Grande logo" },
        { image: c3Logo, className: "c3-logo", alt: "Computation Sciences Center logo" },
        { image: nautecLogo, className: "nautec-logo", alt: "Intelligent automation and robotics group" },
        { image: itecLogo, className: "itec-logo", alt: "Institute of Technology and Computing logo" },
        { image: hydroneLogo, className: "hydrone-logo", alt: "Hydrone project logo" },
        { image: bevlogLogo, className: "bevlog-logo", alt: "Bevlog logo" },
        { image: capesLogo, className: "capes-logo", alt: "Coordination for the Improvement of Higher Education Personnel logo" },
        { image: fapergsLogo, className: "fapergs-logo", alt: "Research Support Foundation of the State of Rio Grande do Sul logo" },
        { image: finepLogo, className: "finep-logo", alt: "Financier of Studies and Projects logo" }
    ]

    return (
        <Marquee
            speed={30}
            autoFill={true}
            gradient={true}
            gradientColor={"var(--bg)"}
            gradientWidth={"var(--gradient)"}
            className="marquee-logos"
        >
            {logos.map((logo, i) => (
                <img src={logo.image} className={logo.className} alt={logo.alt} key={i} />
            ))}
        </Marquee>
    )
}