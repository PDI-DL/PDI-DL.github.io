import { useEffect } from "react";

import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

import "../../style/pages/NotFound.css";

export function NotFound(){
    useEffect(() => {
        document.title = "Page Not Found | PDI";
    }, []);
    return (
        <>
            <Header/>
            <main>
                <h1>ERROR 404</h1>
                <h2>Page Not Found!</h2>
            </main>
            <Footer/>
        </>
    );
}

export default NotFound
