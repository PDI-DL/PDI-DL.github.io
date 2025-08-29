import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Welcome from "../components/Welcome.jsx";
import Carousel from "../components/Carousel.jsx";
import MarqueeLogos from "../components/MarqueeLogos.jsx";

export function Home(){
    useEffect(() => {
        document.title = "Home | PDI";
    }, []);
    return (
        <>
            <Header/>
            <Carousel/>
            <main>
                <Welcome />
                <MarqueeLogos />
            </main>
            <Footer/>
        </>
    );
}

export default Home
