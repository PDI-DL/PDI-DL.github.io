import { useEffect } from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export function Calendar(){
  useEffect(() => {
    document.title = 'Calendar | PDI';
  }, []);
  return (
    <>
      <Header/>
      <main>
        <h1>Calendar</h1>
      </main>
      <Footer/>
    </>
  );
}

export default Calendar