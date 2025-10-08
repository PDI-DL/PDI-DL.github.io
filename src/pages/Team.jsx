import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TeamComponent from "../components/Team.jsx";

export default function Team() {
    useEffect(() => {
        document.title = "Team | PDI";
    }, []);
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