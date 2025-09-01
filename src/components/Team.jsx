import unknownPic from "../assets/other/profilePicture_placeholder.png"
import websiteIcon from "../assets/team/icons/globe-grid.png"
import linkedinIcon from "../assets/logos/logo_linkedin-dark.png"
import academicIcon from "../assets/team/icons/graduation-hat.png"

import "../style/components/Team.css"

export function Team_component(){

    return (
        <>
        <div>
            <h1>Faculty</h1>
            <section>
                <div className="profile">
                    <img src={unknownPic} alt="Unset profile picture" />
                    <div className="info">
                        <h2>Pessoa Fulano dos Santos e Silva</h2>
                        <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                        <div className="infoLinks">
                            <a href="https://breno-xp.github.io/Site_PDI/"><img src={websiteIcon} alt="Personal website icon" /></a>
                            <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                            <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img src={unknownPic} alt="Unset profile picture" />
                    <div className="info">
                        <h2>Pessoa Fulano dos Santos e Silva</h2>
                        <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                        <div className="infoLinks">
                            <a href="https://breno-xp.github.io/Site_PDI/"><img src={websiteIcon} alt="Personal website icon" /></a>
                            <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                            <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img src={unknownPic} alt="Unset profile picture" />
                    <div className="info">
                        <h2>Pessoa Fulano dos Santos e Silva</h2>
                        <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                        <div className="infoLinks">
                            <a href="https://breno-xp.github.io/Site_PDI/"><img src={websiteIcon} alt="Personal website icon" /></a>
                            <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                            <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Team_component;