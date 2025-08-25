import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import News from "../components/News.jsx";

export function Publications(){
  useEffect(() => {
    document.title = "Publications | PDI";
  }, []);
  return (
    <>
      <Header/>
      <main>
        <News/>
      </main>
      <Footer/>
    </>
  );
}

export default Publications