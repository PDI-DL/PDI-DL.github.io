// Excluir quando não houver mais placeholders

import unknownPic from "../assets/other/profilePicture_placeholder.png"
import websiteIcon from "../assets/team/icons/globe-grid.png"
import linkedinIcon from "../assets/logos/logo_linkedin-dark.png"
import academicIcon from "../assets/team/icons/graduation-hat.png" 

import "../style/components/Team.css"
import ScrollReveal from "../utils/ScrollReveal";

export default function Team() {
    const teamFaculty = [

    ]

    const teamPostdocs = [
        {
            key: 0,
            name: "Stephanie Loi Brião",
            profilePic: "./team/members/Stephanie-Loi-Briao.png",
            specialties: "Computer Vision, Digital Image Processing, Modeling, Control of Systems, Robotics",
            links: ["mailto:stephanie.loi@furg.br", "https://www.linkedin.com/in/stephanie-loi-bri%C3%A3o/", "https://github.com/stephanielb/", "https://huggingface.co/stephanielb/",]
        },
    ]

    const teamPhd = [
        {
            key: 0,
            name: "Tatiana Taís Schein",
            profilePic: "./team/members/Tatiana-Tais-Schein.jpg",
            specialties: "Computer Vision, Image Processing, Artificial Intelligence",
            links: ["mailto:tatischein@furg.br", "https://www.linkedin.com/in/tatianaschein/", "https://github.com/TatiSchein/"]
        }
    ]

    const teamMsc = [
        {
            key: 0,
            name: "Gustavo Pereira de Almeida",
            profilePic: "./team/members/gustavoPA.png",
            specialties: "Computer Vision, Autonomous Navigation, Robotic Perception, Deep Learning ",
            links: ["mailto:gustavo.pereira.furg@furg.br", "https://www.linkedin.com/in/gustavo-pereira-de-almeida2146/", "https://github.com/gusanagy", "https://huggingface.co/Gusanagy"]
        },
        {
            key: 1,
            name: "Eduardo Lawson da Silva",
            profilePic: "./team/members/lawson.jpeg",
            specialties: "Computer Vision, Underwater images, Robot Perception, Deep Learning",
            links: ["mailto:eduardolawson@furg.br", "https://br.linkedin.com/in/eduardo-lawson-da-silva-32b8a4224?trk=people_directory", "https://github.com/EduardoLawson1", "https://huggingface.co/EduardoLawson1", "http://lattes.cnpq.br/0984169677021329", "https://scholar.google.com.br/citations?user=i1st8NMAAAAJ&hl=pt-BR&oi=ao", "https://www.researchgate.net/profile/Eduardo-Lawson-Da-Silva"]
        }
    ]

    const teamUndergraduate = [
        {
            key: 0,
            name: "Emanuel da Costa Silva",
            profilePic: "./team/members/profilePicture_placeholder.png",
            specialties: "Computer Vision, Deep Learning, Underwater Imagery, Autonomous Navigation, Computational Imaging, Digital Image Processing",
            links: ["mailto:silva2004@hotmail.com", "https://emanuelcostas.github.io/", "https://www.linkedin.com/in/emanuel-da-costa/", "https://github.com/EmanuelCostaS"]
        },
        {
            key: 1,
            name: "Guilherme Louro Mano Costa",
            profilePic: "./team/members/Guilherme-Louro-Mano-Costa.jpg",
            specialties: "Computer Vision, Digital Image Processing, Deep Learning,  ROS, Autonomous industrial robotics, Autonomous Navigation.",
            links: ["mailto:guilhermemano65667@gmail.com", "https://www.linkedin.com/in/guilherme-mano-994351297", "https://github.com/GuilhermeMano"]
        },
        {
            key: 2,
            name: "Gabriel De Lima Anastacio",
            profilePic: "./team/members/Gabriel-Lima.png",
            specialties: "Computer Vision, Digital Image Processing, Deep Learning, Autonomous Navigation",
            links: ["mailto:mendonsairos@gmail.com", "https://www.linkedin.com/in/gabriel-anastacio-5206831b8/", "https://github.com/Mendas07"]
        }
    ]

    const teamAssociates = [

    ]

    function getImgPath(link){ // Com base no link retorna o nome e caminho para a imagem
        const options = [
            [".github.io", "./team/icons/globe-grid.png"], // para site pessoal, no futuro considerar algo como personalWebsite como flag
            ["linkedin", "./team/icons/linkedin-dark.png"],
            ["github", "./team/icons/github-light.png"],
            ["huggingface", "./team/icons/huggingface.png"],
            ["lattes", "./team/icons/lattes.png"],
            ["scholar.google.com", "./team/icons/googleScholar.png"],
            ["researchgate.net", "./team/icons/researchGate.png"],
        ]
        for (let i = 0; i < options.length; i++){
            if (link.includes("mailto"))
                return ["email", "./team/icons/email.png"]
            if (link.includes(options[i][0]))
                return options[i]
        }
    }

    ScrollReveal();
    return (
        <>
            <div>
                <div className="head">
                    <h1>Team</h1>
                </div>
                <h2 className="teamSec scroll-reveal">Faculty</h2>
                {/* Retirar quando houver alguém listado */}
                    <div className="profile scroll-reveal"> 
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Pessoa Fulano dos Santos</h2>
                            <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                            <div className="infoLinks">
                                <a href=""><img src={websiteIcon} alt="Personal website icon" /></a>
                                <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                            </div>
                        </div>
                    </div>
                <section>
                    {teamFaculty.map(member => (
                        <div className="profile scroll-reveal" key={member.key}>
                            <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                            <div className="info">
                                <h2>{member.name}</h2>
                                <p>{member.specialties}</p>
                                <div className="infoLinks">
                                    {member.links.map((link) => { 
                                        var info = getImgPath(link);
                                        return(<a href={link}><img src={info[1]} alt={`${info[0]} icon`}/></a>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    ))}        
                </section>
                <h2 className="teamSec scroll-reveal">Postdocs</h2>
                <section>
                    {teamPostdocs.map(member => (
                        <div className="profile scroll-reveal" key={member.key}>
                            <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                            <div className="info">
                                <h2>{member.name}</h2>
                                <p>{member.specialties}</p>
                                <div className="infoLinks">
                                    {member.links.map((link) => { 
                                        var info = getImgPath(link);
                                        return(<a href={link}><img src={info[1]} alt={`${info[0]} icon`}/></a>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <h2 className="teamSec scroll-reveal">PhD students</h2>
                <section>
                    {teamPhd.map(member => (
                        <div className="profile scroll-reveal" key={member.key}>
                            <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                            <div className="info">
                                <h2>{member.name}</h2>
                                <p>{member.specialties}</p>
                                <div className="infoLinks">
                                    {member.links.map((link) => { 
                                        var info = getImgPath(link);
                                        return(<a href={link}><img src={info[1]} alt={`${info[0]} icon`}/></a>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <h2 className="teamSec scroll-reveal">MSc students</h2>
                <section>
                    {teamMsc.map(member => (
                        <div className="profile scroll-reveal" key={member.key}>
                            <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                            <div className="info">
                                <h2>{member.name}</h2>
                                <p>{member.specialties}</p>
                                <div className="infoLinks">
                                    {member.links.map((link) => { 
                                        var info = getImgPath(link);
                                        return(<a href={link}><img src={info[1]} alt={`${info[0]} icon`}/></a>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    ))}        
                </section>
                <h2 className="teamSec scroll-reveal">Undergraduate students</h2>
                <section>
                    {teamUndergraduate.map(member => (
                        <div className="profile scroll-reveal" key={member.key}>
                            <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                            <div className="info">
                                <h2>{member.name}</h2>
                                <p>{member.specialties}</p>
                                <div className="infoLinks">
                                    {member.links.map((link) => { 
                                        var info = getImgPath(link);
                                        return(<a href={link}><img src={info[1]} alt={`${info[0]} icon`}/></a>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <h2 className="teamSec scroll-reveal">Research associates and visitors</h2>                
                <section>
                    {/* Retirar quando houver alguém listado */}
                    <div className="profile scroll-reveal"> 
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Pessoa Fulano dos Santos</h2>
                            <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                            <div className="infoLinks">
                                <a href=""><img src={websiteIcon} alt="Personal website icon" /></a>
                                <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                            </div>
                        </div>
                    </div>
                    {teamAssociates.map(member => (
                        <div className="profile scroll-reveal" key={member.key}>
                            <img src={member.profilePic} alt={`Picture of member: ${member.name}`} />
                            <div className="info">
                                <h2>{member.name}</h2>
                                <p>{member.specialties}</p>
                                <div className="infoLinks">
                                    {member.links.map((link) => { 
                                        var info = getImgPath(link);
                                        return(<a href={link}><img src={info[1]} alt={`${info[0]} icon`}/></a>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}