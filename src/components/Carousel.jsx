import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import carouselImage1 from "../assets/other/carousel/sibgrapi2025.jpg";
import carouselImage2 from "../assets/other/carousel/fotasso.jpg";
import carouselImage3 from "../assets/other/carousel/pdi_banner.png";

import "../style/components/Carousel.css";

export default function Carousel() {
    const data = [
        { id: 1, image: carouselImage1, alt: "SIBGRAPI 2025" },
        { id: 2, image: carouselImage2, alt: "Placeholder" },
        { id: 2, image: carouselImage3, alt: "Digital Image Processing and Deep Learning" },
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="slider-container">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                loop={true}
                effect="fade"
                slidesPerView={1}
                pagination={{ clickable: true }}
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {data.map((item) => (
                    <SwiperSlide key={ item.id }>
                        <img src={ item.image } alt={ item.alt } />
                    </SwiperSlide>
                ))}
            </Swiper>
            <span className="slider-caption">{data[activeIndex].alt}</span>
        </div>
    )
}