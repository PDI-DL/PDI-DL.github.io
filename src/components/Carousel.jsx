import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

import carouselPlaceholder1 from "../assets/other/fotasso.jpg";
import carouselPlaceholder2 from "../assets/other/pdi_banner.png";

import "../style/components/Carousel.css";

function Carousel() {
    const data = [
        { id: 1, image: carouselPlaceholder1, alt: "Slide 1" },
        { id: 2, image: carouselPlaceholder2, alt: "Slide 2" },
    ]

    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={item.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel;