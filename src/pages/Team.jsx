import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Team_component from "../components/Team.jsx";


export function Team(){
    useEffect(() => {
        document.title = "Team | PDI";
    }, []);
    return (
        <>
            <Header/>
            <main className="container">
                <Team_component/>
            </main>
            <Footer/>
        </>
    );
}

export default Team;
