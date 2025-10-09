import { useState } from "react";

import "../style/components/Publications.css";

export default function Publications() {
    const [hasMaxHeight, setHasMaxHeight] = useState(false);

    function toggleAllArticles() {
        const buttons = document.querySelectorAll(".card .button-holder button");

        buttons.forEach(btn => {
            const card = btn.closest(".card");
            const span = card.querySelector("span");

            if (hasMaxHeight && span.classList.contains("open-news")) {
                toggleOpenNews({ target: btn });
            } else if (!hasMaxHeight && !span.classList.contains("open-news")) {
                toggleOpenNews({ target: btn });
            }
        });

        setHasMaxHeight(!hasMaxHeight);
    };


    function toggleOpenNews(e) {
        const card = e.target.closest(".card");
        const span = card.querySelector("span");
        const title = card.querySelector("h2");
        const conference = card.querySelector("h3");

        if (span.classList.contains("open-news")) {
            span.style.maxHeight = "6em";
            span.style.overflow = "hidden";
            e.target.innerText = "Expand";
            e.target.classList.remove("button-red-hover");
            e.target.classList.add("button-blue-hover");

            span.addEventListener("transitionend", () => {
                span.classList.remove("open-news");
                title.classList.remove("no-clamp");
                conference.classList.remove("no-clamp");
            }, { once: true });

        } else {
            if (window.matchMedia("(max-width: 480px)").matches) { // equivalente ao @media do CSS
                span.style.maxHeight = "325px"; // conteúdo do paper no mobile fica travado em 325px e com scroll
                span.style.overflow = "scroll";
            } else {
                span.style.maxHeight = span.scrollHeight + "px"; // em telas maiores, expande ao máximo
            }
            span.classList.add("open-news");
            title.classList.add("no-clamp");
            conference.classList.add("no-clamp");
            e.target.innerText = "Close";
            e.target.classList.remove("button-blue-hover");
            e.target.classList.add("button-red-hover");
        }
    };

    const articles = [
        {   
            title: "Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications",
            conference: "38th Conference on Graphics, Patterns and Images (SIBIGRAPI)",
            authors: "Larissa Gomes, Gustavo P. Almeida, Bryan Umbipierre, Marco Quiroz, Breno Xavier, Lucas Soares, Stephanie L. Brião, Felipe G. Oliveira, Paulo L. J. Drews-Jr",
            year: 2025,
            content: "Research and usage of sonar images are relevant for advancing underwater exploration, autonomous navigation, and ecosystem monitoring. However, the progress depends on data availability. The scarcity of publicly available, well-annotated sonar image datasets creates a significant bottleneck for the development of robust machine learning models. This article presents a comprehensive and concise review of the current landscape of sonar image datasets, seeking not only to catalog existing resources but also to contextualize them, identify gaps, and provide a clear roadmap, serving as a base guide for researchers of any kind who wish to start or advance in the field of underwater acoustic data analysis. We mapped publicly accessible datasets across various sonar modalities, including Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and Dual-Frequency Identification Sonar (DIDSON). An analysis was conducted on applications such as classification, detection, segmentation, and 3D reconstruction. This work focuses on state-of-the-art advancements, incorporating newly released datasets. The findings are synthesized into a master table and a chrono-logical timeline, offering a clear and accessible comparison of characteristics, sizes, and annotation details datasets."
        },
        {
            title: "AquaFeat: A Features-Based Image Enhancement Model for Underwater Object Detection",
            conference: "38th Conference on Graphics, Patterns and Images (SIBIGRAPI)",
            authors: "Emanuel Silva, Tatiana T. Schein, Stephanie Loi Brião, Guilherme L. M. Costa, Felipe Gomes Oliveira, Gustavo P. Almeida, Eduardo Lawson da Silva, Sam S. Devincenzi, Karina S. Machado, Paulo Drews-Jr",
            year: 2025,
            content: "The severe image degradation in underwater environments impairs object detection models, as traditional image enhancement methods are often not optimized for such downstream tasks. To address this, we propose AquaFeat, a novel, plug-and-play module that performs task-driven feature enhancement. Our approach integrates a multi-scale feature enhancement network trained end-to-end with the detector’s loss function, ensuring the enhancement process is explicitly guided to refine features most relevant to the detection task. When integrated with YOLOv8m on challenging underwater datasets, AquaFeat achieves state-of-the-art Precision (0.877) and Recall (0.624), along with competitive mAP scores (mAP0.5 of 0.677 and mAP0.5:0.95 of 0.421). By delivering these accuracy gains while maintaining a practical processing speed of 46.5 FPS, our model provides an effective and computationally efficient solution for real-world applications, such as marine ecosystem monitoring and infrastructure inspection."
        }
    ];

    return (
        <div>
            <div className="head">
                <h1>Publications</h1>
                <button onClick={toggleAllArticles} className={`${hasMaxHeight ? 'button-red-hover' : 'button-blue-hover'}`}>
                    {hasMaxHeight ? 'Reduce articles' : 'Show full articles'}
                </button>
            </div>
            <div className="publications scroll-reveal">
                {articles.map((article, i) => (
                    <div className="card" key={i}>
                        <div>
                            <h2>{article.title}</h2>
                        </div>
                        <h3>{article.conference}</h3>
                        <h3>{article.authors}</h3>
                        <span className={hasMaxHeight ? 'open-news' : ""}>{article.content}</span>
                        <div className="button-holder">
                            <span className="card-tag">{article.year}</span>
                            <button onClick={toggleOpenNews} className="button-blue-hover">
                                {hasMaxHeight ? "Close" : "Expand"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}