import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Welcome from "../components/Welcome.jsx";
import Carousel from "../components/Carousel.jsx";
import MarqueeLogos from "../components/MarqueeLogos.jsx";
import GoogleMap from "../components/GoogleMap.jsx"

export function Home(){
    useEffect(() => {
        document.title = "Home | PDI";
    }, []);
    return (
        <>
            <Header/>
            <main>
                <Carousel/>
                <Welcome />
                <MarqueeLogos />
                <GoogleMap/>
            </main>
            <Footer/>
        </>
    );
}

export default Home
