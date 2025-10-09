import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Welcome from "../components/Welcome.jsx";
import Carousel from "../components/Carousel.jsx";
import MarqueeLogos from "../components/MarqueeLogos.jsx";
import GoogleMap from "../components/GoogleMap.jsx"

import ScrollReveal from "../utils/ScrollReveal"

export default function Home() {
    useEffect(() => {
        document.title = "Home | PDI";
    }, []);
    ScrollReveal();
    return (
        <>
            <Header/>
            <main>
                <Carousel/>
                <Welcome/>
                <MarqueeLogos/>
                <GoogleMap/>
            </main>
            <Footer/>
        </>
    );
}