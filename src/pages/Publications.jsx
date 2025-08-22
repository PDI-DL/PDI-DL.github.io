import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export function Publications(){
  useEffect(() => {
    document.title = "Publications | PDI";
  }, []);
  return (
    <>
      <Header/>
      <main>
        <h1>Publications</h1>
      </main>
      <Footer/>
    </>
  );
}

export default Publications