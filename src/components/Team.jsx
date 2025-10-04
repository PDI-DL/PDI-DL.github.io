import unknownPic from "../assets/other/profilePicture_placeholder.png"
import websiteIcon from "../assets/team/icons/globe-grid.png"
import linkedinIcon from "../assets/logos/logo_linkedin-dark.png"
import academicIcon from "../assets/team/icons/graduation-hat.png"
import githubIcon from "../assets/logos/logo_github-light.png"
import huggingfaceIcon from "../assets/logos/logo_huggingface.png"
import emailIcon from "../assets/team/icons/email.png"

import stephanieBriaoPic from "../assets/team/postdocs/Stephanie-Loi-Briao.png"
import tatiScheinPic from "../assets/team/phd/Tatiana-Tais-Schein.jpg"
import guilhermeCostaPic from "../assets/team/undergraduate/Guilherme-Louro-Mano-Costa.jpg"

import "../style/components/Team.css"

export default function Team() {
    return (
        <>
            <div>
                <div className="head">
                    <h1>Team</h1>
                </div>
                <h2 className="teamSec"> Faculty </h2>
                <section>
                    <div className="profile">
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Pessoa Fulano dos Santos</h2>
                            <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                            <div className="infoLinks">
                                <a href="https://breno-xp.github.io/Site_PDI/"><img src={websiteIcon} alt="Personal website icon" /></a>
                                <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                            </div>
                        </div>
                    </div>        
                </section>
                <h2 className="teamSec"> Postdocs </h2>
                <section>
                    <div className="profile">
                        <img src={stephanieBriaoPic} alt="Stephanie's profile picture" />
                        <div className="info">
                            <h2>Stephanie Loi Brião</h2>
                            <p>Computer Vision, Digital Image Processing, Modeling and Control of Systems, Robotics</p>
                            <div className="infoLinks">
                                <a href="mailto:stephanie.loi@furg.br"><img src={emailIcon} alt="Email icon" /></a>
                                <a href="https://www.linkedin.com/in/stephanie-loi-bri%C3%A3o/" target="blank"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href="https://github.com/stephanielb/" target="blank"><img src={githubIcon} alt="GitHub icon" /></a>
                                <a href="https://huggingface.co/stephanielb/" target="blank"><img src={huggingfaceIcon} alt="HuggingFace icon" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="teamSec">PhD students</h2>
                <section>
                    <div className="profile">
                        <img src={tatiScheinPic} alt="Tatiana's profile picture" />
                        <div className="info">
                            <h2>Tatiana Taís Schein</h2>
                            <p>Computer Vision, Image Processing and Artificial Intelligence</p>
                            <div className="infoLinks">
                                <a href="mailto:tatischein@furg.br"><img src={emailIcon} alt="Email icon" /></a>
                                <a href="https://www.linkedin.com/in/tatianaschein/" target="blank"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href="https://github.com/TatiSchein/" target="blank"><img src={githubIcon} alt="GitHub icon" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="teamSec">MSc students</h2>
                <section>
                    <div className="profile">
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Pessoa Fulano dos Santos</h2>
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
                            <h2>Pessoa Fulano dos Santos</h2>
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
                            <h2>Pessoa Fulano dos Santos</h2>
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
                            <h2>Pessoa Fulano dos Santos</h2>
                            <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                            <div className="infoLinks">
                                <a href="https://breno-xp.github.io/Site_PDI/"><img src={websiteIcon} alt="Personal website icon" /></a>
                                <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                            </div>
                        </div>
                    </div>        
                </section>
                <h2 className="teamSec">Undergraduate students</h2>
                <section>
                    <div className="profile">
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Emanuel da Costa Silva</h2>
                            <p>Computer Vision, Deep Learning, Underwater Imagery, Autonomous Navigation, Computational Imaging, Digital Image Processing</p>
                            <div className="infoLinks">
                                <a href="https://emanuelcostas.github.io/" target="blank"><img src={websiteIcon} alt="Personal website icon" /></a>
                                <a href="https://github.com/EmanuelCostaS" target="blank"><img src={githubIcon} alt="Github icon" /></a>
                                <a href="https://www.linkedin.com/in/emanuel-da-costa/" target="blank"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href="mailto:silva2004@hotmail.com"><img src={emailIcon} alt="Email icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={guilhermeCostaPic} alt="Guilherme's profile picture" />
                        <div className="info">
                            <h2>Guilherme Louro Mano Costa</h2>
                            <p>Computer Vision, Digital Image Processing, Deep Learning,  ROS, Autonomous industrial robotics, Autonomous Navigation</p>
                            <div className="infoLinks">
                                <a href="https://github.com/GuilhermeMano" target="blank"><img src={githubIcon} alt="Github icon" /></a>
                                <a href="https://www.linkedin.com/in/guilherme-mano-994351297" target="blank"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href="mailto:guilhermemano65667@gmail.com"><img src={emailIcon} alt="Email icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Gabriel De Lima Anastacio</h2>
                            <p>Computer Vision, Digital Image Processing, Deep Learning, Autonomous Navigation</p>
                            <div className="infoLinks">
                                <a href="https://github.com/Mendas07" target="blank"><img src={githubIcon} alt="Github icon" /></a>
                                <a href="https://www.linkedin.com/in/gabriel-anastacio-5206831b8/"target="blank"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href="mailto:mendonsairos@gmail.com"><img src={emailIcon} alt="Email icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Pessoa Fulano dos Santos</h2>
                            <p>Pequeno texto de apresentação profissional aqui, áreas que trabalha, etc...</p>
                            <div className="infoLinks">
                                <a href="https://breno-xp.github.io/Site_PDI/"><img src={websiteIcon} alt="Personal website icon" /></a>
                                <a href=""><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                                <a href=""><img src={academicIcon} alt="Scholar icon" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="teamSec">Research associates and visitors</h2>                
                <section>
                    <div className="profile">
                        <img src={unknownPic} alt="Unset profile picture" />
                        <div className="info">
                            <h2>Pessoa Fulano dos Santos</h2>
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
                            <h2>Pessoa Fulano dos Santos</h2>
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
                            <h2>Pessoa Fulano dos Santos</h2>
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
                            <h2>Pessoa Fulano dos Santos</h2>
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