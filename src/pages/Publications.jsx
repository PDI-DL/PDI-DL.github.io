import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PublicationComponent from "../components/Publications.jsx";

export function Publications(){
    useEffect(() => {
        document.title = "Publications | PDI";
    }, []);
    return (
        <>
            <Header/>
            <main>
                <PublicationComponent/>
            </main>
            <Footer/>
        </>
    );
}

export default Publications
