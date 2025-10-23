import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../style/components/Carousel.css";

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        { image: "./carousel/sibgrapi-2025.jpg", alt: "SIBGRAPI 2025" },
        { image: "./carousel/pdi-banner.png", alt: "Digital Image Processing and Deep Learning" },
    ]

    return (
        <div className="slider-container scroll-reveal">
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
                {images.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item.image} alt={item.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <span className="slider-caption">{images[activeIndex].alt}</span>
        </div>
    )
}