import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PublicationsComponent from "../components/Publications.jsx";

import ScrollReveal from "../utils/ScrollReveal";

export default function Publications() {
    useEffect(() => {
        document.title = "Publications | PDI";
    }, []);
    ScrollReveal();
    return (
        <>
            <Header/>
            <main>
                <PublicationsComponent/>
            </main>
            <Footer/>
        </>
    );
}