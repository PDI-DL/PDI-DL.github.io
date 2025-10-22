import { useEffect, useState } from "react";

import TeamData from "../data/Team.json";

import habemusSorriso from "../assets/other/habemus-sorriso.webp";
import bellSound from "../assets/other/habemus-sorriso.mp3";

import "../style/components/Team.css"

export default function Team() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        let clicks = 0
        let bell = new Audio(bellSound);
        bell.volume = 0.25;
        const clickCounter = () => {
            clicks++;
            if (clicks == 7) {
                setIsVisible(true); // HABEMUS SORRISO!
                bell.play().catch(() => {});
                setTimeout(() => setIsVisible(false), 600);
                clicks = 0;
            }
        }
        const sorriso = document.querySelector("img[src^='./team/members/Gabriel-Lima.png']");
        const clickSorriso = () => clickCounter(); sorriso.addEventListener("pointerdown", clickSorriso);
        return () => { sorriso.removeEventListener("pointerdown", clickSorriso); }; // cleanup
    }, []);

    const sections = [
        { title: "Faculty", members: TeamData.faculty },
        { title: "Postdocs", members: TeamData.postdocs },
        { title: "PhD students", members: TeamData.phd },
        { title: "MSc students", members: TeamData.msc },
        { title: "Undergraduate students", members: TeamData.undergraduate },
        { title: "Research associates and visitors", members: TeamData.associates }
    ]

    function getImgPath(link){ // Com base no link retorna o nome e caminho para a imagem
        const options = [
            [".github.io", "./team/icons/globe-grid.png"], // para site pessoal, no futuro considerar algo como personalWebsite como flag
            ["linktr.ee", "./team/icons/globe-grid.png"],
            ["linkedin", "./team/icons/linkedin-dark.png"],
            ["github", "./team/icons/github-light.png"],
            ["huggingface", "./team/icons/huggingface.png"],
            ["lattes", "./team/icons/lattes.png"],
            ["orcid", "./team/icons/orcid.png"],
            ["scholar.google.com", "./team/icons/googleScholar.png"],
            ["researchgate.net", "./team/icons/researchGate.png"],
        ]
        for (let i = 0; i < options.length; i++){
            if (link.includes("mailto"))
                return ["email", "./team/icons/email.png"];
            if (link.includes(options[i][0]))
                return options[i];
        }
    }

    return (
        <>
            <div>
                <div className="head">
                    <h1>Team</h1>
                </div>
                {sections.map((section, i) => (
                    <div key={i}>
                        <h2 className="team-sec scroll-reveal">{section.title}</h2>
                        <section>
                            {/* placeholder */}
                            {section.members.length === 0 ? (
                                <div className="profile scroll-reveal">
                                    <img src="/team/members/placeholder-profile.png" className="placeholder-profile" alt="Unset profile picture" />
                                    <div className="info">
                                        <h2>Pessoa Fulano dos Santos</h2>
                                        <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                                        <div className="info-links">
                                            <a href=""><img src="/team/icons/globe-grid.png" alt="Personal website icon" /></a>
                                            <a href=""><img src="/team/icons/linkedin-dark.png" alt="LinkedIn icon" /></a>
                                            <a href=""><img src="/team/icons/graduation-hat.png" alt="Scholar icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                section.members.map((member, i) => (
                                    <div className="profile scroll-reveal" key={i}>
                                        <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                                        <div className="info">
                                            <h2>{member.name}</h2>
                                            <p>{member.specialties}</p>
                                            <div className="info-links">
                                                {member.links.map((link, i) => {
                                                    const info = getImgPath(link);
                                                    return (
                                                        <a href={link} key={i}>
                                                            <img src={info[1]} alt={`${info[0]} icon`} />
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </section>
                    </div>
                ))}
                <img src={habemusSorriso} className={`habemus-sorriso ${isVisible ? "show" : ""}`} alt="Habemus Sorriso" />
            </div>
        </>
    );
}