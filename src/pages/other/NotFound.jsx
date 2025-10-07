import { useEffect } from "react";

import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

import ScrollReveal from "../../utils/ScrollReveal.jsx";
import "../../style/pages/other/NotFound.css";

export default function NotFound() {
    useEffect(() => {
        document.title = "Page Not Found | PDI";
    }, []);
    ScrollReveal();
    return (
        <div className="notfound-container">
            <Header/>
            <main>
                <div className="error scroll-reveal">
                    <h1>ERROR 404</h1>
                    <h2>Page Not Found!</h2>
                </div>
            </main>
            <Footer/>
        </div>
    );
}