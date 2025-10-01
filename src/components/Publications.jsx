import { useState } from "react";

import "../style/components/Publications.css";

function News(){
    const [hasMaxHeight, setHasMaxHeight] = useState(false);

    const toggleMaxHeight = () => {
        setHasMaxHeight(!hasMaxHeight);
    };

    const toggleOpenNews = (e) => {
        // console.log(e.target.parentElement.id);
        // console.log(card.parentElement.children[1])
        // e.target.parentElement.classList.add("openNews");
        const card = e.target.parentElement.parentElement;
        const news = card.parentElement;
        const title = card.querySelector("h2");
        const conference = card.querySelector("h3")
        const span = card.querySelector("span");

        if(span.classList.contains("openNews")){
            // news.removeChild(card);
            // news.append(card);
            title.classList.remove("Noclamp")
            conference.classList.remove("Noclamp")
            span.classList.remove("openNews");
            e.target.classList.remove("button_redHover")
            e.target.classList.add("button_blueHover")
            // card.classList.remove("cardExpand");
            // card.classList.add("cardRead");
            e.target.innerText = "Expand";
        }
        else{
            // news.removeChild(card);
            // news.prepend(card);
            title.classList.add("Noclamp")
            conference.classList.add("Noclamp")
            span.classList.add("openNews");
            e.target.classList.remove("button_blueHover")
            e.target.classList.add("button_redHover")
            // card.classList.add("cardExpand");
            e.target.innerText = "Close";
            // window.scrollTo({
            // top: 0,
            // behavior: 'smooth' // or 'auto' or 'instant'
            // });
        }
    }

    return(
        <div>
            <div id="head">
                <h1>Papers</h1>
                <button onClick={toggleMaxHeight} className={`${hasMaxHeight ? 'button_redHover' : 'button_blueHover'}`}> {hasMaxHeight ? 'Reduce articles' : 'Show full articles'} </button>
            </div>
            <div className="news">
                <div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
                    <div className="cardTitleWraper">
                        <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
                        {/* title="Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications" */}
                        
                    </div>
                    <h3>38th Conference on Graphics, Patterns and Images <b>(SIBIGRAPI)</b></h3>
                    <h3>Larissa Gomes<sup>1</sup>, Gustavo P. Almeida<sup>2</sup>, Bryan Umbipierre<sup>3</sup>, Marco Quiroz<sup>4</sup>, Breno Xavier<sup>5</sup>, Lucas Soares<sup>6</sup>, Stephanie L. Brião<sup>7</sup>, Felipe G. Oliveira<sup>8</sup> and Paulo L. J. Drews-Jr<sup>9</sup></h3>
                    <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for advancing underwater exploration, autonomous navigation, and ecosystem monitoring. However, the progress depends on data availability. The scarcity of publicly available, well-annotated sonar image datasets creates a significant bottleneck for the development of robust machine learning models. This article presents a comprehensive and concise review of the current landscape of sonar image datasets, seeking not only to catalog existing resources but also to contextualize them, identify gaps, and provide a clear roadmap, serving as a base guide for researchers of any kind who wish to start or advance in the field of underwater acoustic data analysis. We mapped publicly accessible datasets across various sonar modalities, including Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and Dual-Frequency Identification Sonar (DIDSON). An analysis was conducted on applications such as classification, detection, segmentation, and 3D reconstruction. This work focuses on state-of-the-art advancements, incorporating newly released datasets. The findings are synthesized into a master table and a chrono-logical timeline, offering a clear and accessible comparison of characteristics, sizes, and annotation details datasets.</span>
                    <div className="buttonHolder">
                        <span className="cardTag">2025</span>
                        <button onClick={toggleOpenNews} className="button_blueHover">{hasMaxHeight ? "Close" : "Expand"}</button>
                    </div>
                </div>
                <div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="2">
                    <h2>AquaFeat: A Features-Based Image Enhancement Model for Underwater Object Detection</h2>
                    {/* title="AquaFeat: A Features-Based Image Enhancement Model for Underwater Object Detection" */}
                    <h3>38th Conference on Graphics, Patterns and Images <b>(SIBIGRAPI)</b></h3>
                    <h3>Emanuel Silva<sup>1</sup>, Tatiana T. Schein<sup>2</sup>, Stephanie Loi Brião<sup>3</sup>, Guilherme L. M. Costa<sup>4</sup>, Felipe Gomes Oliveira<sup>5</sup>, Gustavo P. Almeida<sup>6</sup>, Eduardo Lawson da Silva<sup>7</sup>, Sam S. Devincenzi<sup>8</sup>, Karina S. Machado<sup>9</sup>and Paulo Drews-Jr<sup>10</sup></h3>
                    <span className = {hasMaxHeight ? 'openNews' : ""}>The severe image degradation in underwater environments impairs object detection models, as traditional image enhancement methods are often not optimized for such downstream tasks. To address this, we propose AquaFeat, a novel, plug-and-play module that performs task-driven feature enhancement. Our approach integrates a multi-scale feature enhancement network trained end-to-end with the detector’s loss function, ensuring the enhancement process is explicitly guided to refine features most relevant to the detection task. When integrated with YOLOv8m on challenging underwater datasets, AquaFeat achieves state-of-the-art Precision (0.877) and Recall (0.624), along with competitive mAP scores (mAP0.5 of 0.677 and mAP0.5:0.95 of 0.421). By delivering these accuracy gains while maintaining a practical processing speed of 46.5 FPS, our model provides an effective and computationally efficient solution for real-world applications, such as marine ecosystem monitoring and infrastructure inspection.</span>
                    <div className="buttonHolder">
                        <span className="cardTag">2025</span>
                        <button onClick={toggleOpenNews} className="button_blueHover">{hasMaxHeight ? "Close" : "Expand"}</button>
                    </div>
                </div>
            </div>
        </div>
    );

    // {hasMaxHeight ? 'v' : '^'}
}

export default News;
