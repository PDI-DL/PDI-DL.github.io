import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Welcome from "../components/Welcome.jsx";
import Carousel from "../components/Carousel.jsx";
<<<<<<< HEAD
=======
import MarqueeLogos from "../components/MarqueeLogos.jsx";
>>>>>>> ffe9c5000ff81157385bb46235d21c013f90fad9

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
