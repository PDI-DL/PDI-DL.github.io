import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PublicationsComponent from "../components/Publications.jsx";

export default function Publications() {
    useEffect(() => {
        document.title = "Publications | PDI";
    }, []);
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