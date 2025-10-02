import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import CalendarGraphic from "../components/Calendar.jsx";
import CalendarLine from "../components/CalendarLine.jsx";
import CalendarTable from "../components/CalendarTable.jsx";


export function Calendar(){
    useEffect(() => {
        document.title = "Calendar | PDI";
    }, []);
    return (
        <>
            <Header/>
            <main>
                <CalendarGraphic/>
                <CalendarLine/>
                <CalendarTable/>
            </main>
            <Footer/>
        </>
    );
}

export default Calendar
