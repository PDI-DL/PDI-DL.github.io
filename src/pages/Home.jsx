import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'

import News from '../components/News.jsx'

export function Home(){
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

export default Home