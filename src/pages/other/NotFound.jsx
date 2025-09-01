import { useEffect } from "react";

import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

import "../../style/pages/other/NotFound.css";

export function NotFound(){
    useEffect(() => {
        document.title = "Page Not Found | PDI";
    }, []);
    return (
        <div className="notfound-container">
            <Header/>
            <main>
                <h1>ERROR 404</h1>
                <h2>Page Not Found!</h2>
            </main>
            <Footer/>
        </div>
    );
}

export default NotFound
