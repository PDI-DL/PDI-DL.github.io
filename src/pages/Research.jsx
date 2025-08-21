import { useEffect } from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export function Research(){
  useEffect(() => {
    document.title = 'Research | PDI';
  }, []);
  return (
    <>
      <Header/>
      <main>
        <h1>Research</h1>
      </main>
      <Footer/>
    </>
  );
}

export default Research