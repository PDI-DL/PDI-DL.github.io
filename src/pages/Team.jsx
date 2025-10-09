import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TeamComponent from "../components/Team.jsx";

import ScrollReveal from "../utils/ScrollReveal";

export default function Team() {
    useEffect(() => {
        document.title = "Team | PDI";
    }, []);
    ScrollReveal();
    return (
        <>
            <Header/>
            <main className="container main-team">
                <TeamComponent/>
            </main>
            <Footer/>
        </>
    );
}