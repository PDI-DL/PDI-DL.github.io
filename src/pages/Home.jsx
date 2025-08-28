import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";

export function Home(){
    useEffect(() => {
        document.title = "Home | PDI";
    }, []);
    return (
        <>
            <Header/>
            <main>
                <Carousel/>

            </main>
            <Footer/>
        </>
    );
}

export default Home
