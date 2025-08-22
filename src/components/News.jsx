import { useState } from "react";

import "../style/components/News.css";

function News(){
  const [hasMaxHeight, setHasMaxHeight] = useState(true);
  
  const toggleMaxHeight = () => {
      setHasMaxHeight(!hasMaxHeight);
  };

  return(
      <div className = "container">
        <div id="head">
          <h1>Papers</h1>
          <button onClick={toggleMaxHeight}> {hasMaxHeight ? 'Show full articles' : 'Reduce articles'} </button>
        </div>
        <div className="news">
          <div className="card">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <span className = {hasMaxHeight ? '' : 'off_maxHeight'}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
          </div>
          <div className="card">
            <h2>Content</h2>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis sed architecto quisquam vel at laborum sit ducimus? Modi eligendi cupiditate maxime distinctio amet aut recusandae perferendis veritatis repellendus assumenda?</span>
          </div>
          <div className="card">
            <h2>Sonar Image Datasets: A Comprehensive Survey of Resources, Challenges, and Applications</h2>
            <span className = {hasMaxHeight ? '' : 'off_maxHeight'}>Research and usage of sonar images are relevant for1advancing underwater exploration, autonomous navigation, and2ecosystem monitoring. However, the progress depends on data3availability. The scarcity of publicly available, well-annotated4sonar image datasets creates a significant bottleneck for the5development of robust machine learning models. This article6presents a comprehensive and concise review of the current7landscape of sonar image datasets, seeking not only to catalog8existing resources but also to contextualize them, identify gaps,9and provide a clear roadmap, serving as a base guide for10researchers of any kind who wish to start or advance in the11field of underwater acoustic data analysis. We mapped publicly12accessible datasets across various sonar modalities, including13Side Scan Sonar (SSS), Forward-Looking Sonar (FLS), Synthetic14Aperture Sonar (SAS), Multibeam Echo Sounder (MBES), and15Dual-Frequency Identification Sonar (DIDSON). An analysis16was conducted on applications such as classification, detection,17segmentation, and 3D reconstruction. This work focuses on state-18of-the-art advancements, incorporating newly released datasets.19The findings are synthesized into a master table and a chrono-20logical timeline, offering a clear and accessible comparison of21characteristics, sizes, and annotation details datasets.</span>
          </div>
          <div className="card">
            <h2>Content</h2>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis sed architecto quisquam vel at laborum sit ducimus? Modi eligendi cupiditate maxime distinctio amet aut recusandae perferendis veritatis repellendus assumenda?</span>
          </div>
        </div>
      </div>
  );

  // {hasMaxHeight ? 'v' : '^'}
}

export default News;