import { useState } from "react";

import arxivLogo from "../assets/logos/logo_arxiv.png"

import PublicationsData from "../data/Publications.json";

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

    return (
        <div>
            <div className="head">
                <h1>Publications</h1>
                <button onClick={toggleAllArticles} className={`${hasMaxHeight ? 'button-red-hover' : 'button-blue-hover'}`}>
                    {hasMaxHeight ? 'Reduce articles' : 'Show full articles'}
                </button>
            </div>
            <div className="publications scroll-reveal">
                {PublicationsData.map((article, i) => (
                    <div className="card" key={i}>
                        <div>
                            <h2>{article.title}</h2>
                        </div>
                        <h3>{article.conference}</h3>
                        <h3>{article.authors}</h3>
                        <span className={hasMaxHeight ? 'open-news' : ""}>{article.content}</span>
                        <div className="button-holder">
                            <div className="left">
                                <a href={article.paper} className="card-tag" target="_blank"><img src={arxivLogo} alt="Arxiv logo"></img></a>
                                <span className="card-tag year">{article.year}</span>
                            </div>
                            <div className="right">
                                <button onClick={toggleOpenNews} className="button-blue-hover">
                                    {hasMaxHeight ? "Close" : "Expand"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}