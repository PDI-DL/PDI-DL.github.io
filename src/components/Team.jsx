// Excluir quando não houver mais placeholders

import unknownPic from "../assets/other/profilePicture_placeholder.png"
import websiteIcon from "../assets/team/icons/globe-grid.png"
import linkedinIcon from "../assets/logos/logo_linkedin-dark.png"
import academicIcon from "../assets/team/icons/graduation-hat.png" 

import ScrollReveal from "../utils/ScrollReveal";
import "../style/components/Team.css"

export default function Team() {
    const teamFaculty = [

    ]

    const teamPostdocs = [
        {
            name: "Stephanie Loi Brião",
            profilePic: "./team/members/Stephanie-Loi-Briao.png",
            specialties: "Computer Vision, Digital Image Processing, Modeling, Control of Systems, Robotics",
            links: ["mailto:stephanie.loi@furg.br", "https://www.linkedin.com/in/stephanie-loi-bri%C3%A3o/", "https://github.com/stephanielb/", "https://huggingface.co/stephanielb/", "http://lattes.cnpq.br/4926650234495195", "https://orcid.org/my-orcid?orcid=0000-0001-9345-2038", "https://scholar.google.com/citations?user=16VtTiQAAAAJ&hl=pt-BR", "https://www.researchgate.net/profile/Stephanie-Loi-Briao"]
        },
    ]

    const teamPhd = [
        {
            name: "Tatiana Taís Schein",
            profilePic: "./team/members/Tatiana-Tais-Schein.jpg",
            specialties: "Computer Vision, Image Processing, Artificial Intelligence",
            links: ["mailto:tatischein@furg.br", "https://www.linkedin.com/in/tatianaschein/", "https://github.com/TatiSchein/"]
        }
    ]

    const teamMsc = [
        {
            name: "Gustavo Pereira de Almeida",
            profilePic: "./team/members/Gustavo-Pereira-de-Almeida.png",
            specialties: "Computer Vision, Autonomous Navigation, Robotic Perception, Deep Learning ",
            links: ["mailto:gustavo.pereira.furg@furg.br", "https://www.linkedin.com/in/gustavo-pereira-de-almeida2146/", "https://github.com/gusanagy", "https://huggingface.co/Gusanagy"]
        },
        {
            name: "Eduardo Lawson da Silva",
            profilePic: "./team/members/Eduardo-Lawson.jpeg",
            specialties: "Computer Vision, Underwater images, Robot Perception, Deep Learning",
            links: ["mailto:eduardolawson@furg.br", "https://br.linkedin.com/in/eduardo-lawson-da-silva-32b8a4224?trk=people_directory", "https://github.com/EduardoLawson1", "https://huggingface.co/EduardoLawson1", "http://lattes.cnpq.br/0984169677021329", "https://scholar.google.com.br/citations?user=i1st8NMAAAAJ&hl=pt-BR&oi=ao", "https://www.researchgate.net/profile/Eduardo-Lawson-Da-Silva"]
        }
    ]

    const teamUndergraduate = [
        {
            name: "Emanuel da Costa Silva",
            profilePic: "./team/members/profilePicture_placeholder.png",
            specialties: "Computer Vision, Deep Learning, Underwater Imagery, Autonomous Navigation, Computational Imaging, Digital Image Processing",
            links: ["https://emanuelcostas.github.io/", "mailto:silva2004@hotmail.com", "https://www.linkedin.com/in/emanuel-da-costa/", "https://github.com/EmanuelCostaS"]
        },
        {
            name: "Guilherme Louro Mano Costa",
            profilePic: "./team/members/Guilherme-Louro-Mano-Costa.jpg",
            specialties: "Computer Vision, Digital Image Processing, Deep Learning,  ROS, Autonomous industrial robotics, Autonomous Navigation.",
            links: ["mailto:guilhermemano65667@gmail.com", "https://www.linkedin.com/in/guilherme-mano-994351297", "https://github.com/GuilhermeMano"]
        },
        {
            name: "Gabriel De Lima Anastacio",
            profilePic: "./team/members/Gabriel-Lima.png",
            specialties: "Computer Vision, Digital Image Processing, Deep Learning, Autonomous Navigation",
            links: ["mailto:mendonsairos@gmail.com", "https://www.linkedin.com/in/gabriel-anastacio-5206831b8/", "https://github.com/Mendas07"]
        },
        {
            name: "Jorge Bernardo Melo Ferreira",
            profilePic: "./team/members/Jorge-Melo.jpg",
            specialties: "Computer Vision, Deep Learning",
            links: ["mailto:jorgebernardo2210@gmail.com", "https://www.linkedin.com/in/jorge-bernardo-melo-ferreira-338846360/", "https://github.com/jorgemelo10", "https://huggingface.co/jorgemelo10"]
        },
        {
            name: "Gustavo Arthur Dutra",
            profilePic: "./team/members/profilePicture_placeholder.png",
            specialties: "Computer Vision, Data Science, Deep Learning",
            links: ["https://linktr.ee/gustavodutraaa", "mailto:gustavoadutra.contato@gmail.com", "https://www.linkedin.com/in/gustavo-arthur-dutra/", "https://github.com/gustavoadutra", "https://huggingface.co/akiGustavo", "http://lattes.cnpq.br/2930295811656775"]
        }
    ]

    const teamAssociates = [

    ]

    const sections = [
        { title: "Faculty", members: teamFaculty },
        { title: "Postdocs", members: teamPostdocs },
        { title: "PhD students", members: teamPhd },
        { title: "MSc students", members: teamMsc },
        { title: "Undergraduate students", members: teamUndergraduate },
        { title: "Research associates and visitors", members: teamAssociates }
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

    ScrollReveal();
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
                                    <img src={unknownPic} alt="Unset profile picture" />
                                    <div className="info">
                                        <h2>Pessoa Fulano dos Santos</h2>
                                        <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                                        <div className="info-links">
                                            <a href=""><img src={websiteIcon} alt="Personal website icon" /></a>
                                            <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                            <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
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
            </div>
        </>
    );
}