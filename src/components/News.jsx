import { useState } from "react";

import "../style/components/News.css";

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
    const span = card.querySelector("span");
    const news = card.parentElement;


    if(span.classList.contains("openNews")){
      news.removeChild(card);
      news.append(card);
      span.classList.remove("openNews");
      card.classList.remove("cardExpand");
      e.target.innerText = "Expand";
    }
    else{
      news.removeChild(card);
      news.prepend(card);
      span.classList.add("openNews");
      card.classList.add("cardExpand");
      e.target.innerText = "Close";
    }
  }

  return(
      <div className = "container">
        <div id="head">
          <h1>Papers</h1>
          <button onClick={toggleMaxHeight}> {hasMaxHeight ? 'Reduce articles' : 'Show full articles'} </button>
        </div>
        <div className="news">
          <div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>37ª Conference on Graphics, Patterns and Images</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <span>2025</span>
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div>
          <div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>Conference: SIBIGRAPI</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div><div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>Conference: SIBIGRAPI</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div><div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>Conference: SIBIGRAPI</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div><div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>Conference: SIBIGRAPI</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div><div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>Conference: SIBIGRAPI</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div><div className={`card ${hasMaxHeight ? 'cardExpand' : ''}`} id="1">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <li><h3>Conference: SIBIGRAPI</h3></li>
            <li><h3>Authors: Author<sup>1</sup>, Author<sup>2</sup>, Author<sup>3</sup>, Author<sup>4</sup>, Author<sup>5</sup>, Author<sup>6</sup>, Author<sup>7</sup>, Author<sup>8</sup></h3></li>
            <span className = {hasMaxHeight ? 'openNews' : ""}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
            <div className="buttonHolder">
                <button onClick={toggleOpenNews}>{hasMaxHeight ? "Close" : "Expand"}</button>
            </div>
          </div>
        </div>
      </div>
  );

    // {hasMaxHeight ? 'v' : '^'}
}

export default News;
