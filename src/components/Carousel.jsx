import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import carouselPlaceholder1 from "../assets/other/fotasso.jpg";
import carouselPlaceholder2 from "../assets/other/carousel-placeholder.png";

import "../style/components/Carousel.css";

function Carousel() {
    const data = [
        { id: 1, image: carouselPlaceholder1, alt: "Slide 1" },
        { id: 2, image: carouselPlaceholder2, alt: "Slide 2" },
    ]

    return (
        <div className="slider-container">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={item.alt} className="slide-item" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel;