import { useState } from 'react';

import './News.css';

function News(){
    const [hasMaxHeight, setHasMaxHeight] = useState(true);
    
    const toggleMaxHeight = () => {
        setHasMaxHeight(!hasMaxHeight);
    };

    return(
        <div className = "container">
            <div id="head">
                <h1>News</h1>
                <button onClick={toggleMaxHeight}> {hasMaxHeight ? 'Show full articles' : 'Reduce articles'} </button>
            </div>
            <div className="news">
                <div className='card'>
                    <h2>Content</h2>
                    <span className = {hasMaxHeight ? '' : 'off_maxHeight'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis sed architecto quisquam vel at laborum sit ducimus? Modi eligendi cupiditate maxime distinctio amet aut recusandae perferendis veritatis repellendus assumenda? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quaerat dolor doloremque aspernatur, nesciunt animi quae similique consequuntur quisquam? Debitis ea quas eaque similique illo autem? Tempora, vitae. Ut, dolores?</span>
                </div>
                <div className='card'>
                    <h2>Content</h2>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis sed architecto quisquam vel at laborum sit ducimus? Modi eligendi cupiditate maxime distinctio amet aut recusandae perferendis veritatis repellendus assumenda?</span>
                </div>
                <div className='card'>
                    <h2>Content</h2>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis sed architecto quisquam vel at laborum sit ducimus? Modi eligendi cupiditate maxime distinctio amet aut recusandae perferendis veritatis repellendus assumenda?</span>
                </div>
            </div>
        </div>
    );

    // {hasMaxHeight ? 'v' : '^'}
}

export default News;