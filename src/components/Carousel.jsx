import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import carouselPlaceholder from "../assets/other/fotasso.jpeg";

import "../style/components/Carousel.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="carousel-container">
            <div>
                <img src={carouselPlaceholder} alt="carousel placeholder" />
            </div>
            <div>
                <img src={carouselPlaceholder} alt="carousel placeholder" />
            </div>
            <div>
                <img src={carouselPlaceholder} alt="carousel placeholder" />
            </div>
        </Slider>
    );
}

export default Carousel;
