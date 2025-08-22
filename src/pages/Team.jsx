import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export function Team(){
  useEffect(() => {
    document.title = "Team | PDI";
  }, []);
  return (
    <>
      <Header/>
      <main>
        <h1>Team</h1>
      </main>
      <Footer/>
    </>
  );
}

export default Team