import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";

export function Home(){
    useEffect(() => {
        document.title = "Home | PDI";
    }, []);
    return (
        <>
            <Header/>
            <Carousel/>
            <main>
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem labore illum blanditiis necessitatibus recusandae consequuntur est dolorum facilis nobis maiores dolor velit voluptates placeat, dolore saepe aliquid inventore quae ipsum! Asperiores officiis iure id corporis sapiente, sint reiciendis omnis similique, magni rem doloremque incidunt. Necessitatibus expedita eligendi nemo ex, cupiditate odio accusantium inventore temporibus. Dolorum labore eos nisi quidem est! Dignissimos provident eligendi, fuga porro maiores molestias. Iure tempore, vero praesentium expedita consequuntur ipsam adipisci quisquam sint explicabo voluptatem impedit repudiandae modi eveniet veritatis quaerat aspernatur excepturi voluptate recusandae dolorum!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem labore illum blanditiis necessitatibus recusandae consequuntur est dolorum facilis nobis maiores dolor velit voluptates placeat, dolore saepe aliquid inventore quae ipsum! Asperiores officiis iure id corporis sapiente, sint reiciendis omnis similique, magni rem doloremque incidunt. Necessitatibus expedita eligendi nemo ex, cupiditate odio accusantium inventore temporibus. Dolorum labore eos nisi quidem est! Dignissimos provident eligendi, fuga porro maiores molestias. Iure tempore, vero praesentium expedita consequuntur ipsam adipisci quisquam sint explicabo voluptatem impedit repudiandae modi eveniet veritatis quaerat aspernatur excepturi voluptate recusandae dolorum!</p>
            </main>
            <Footer/>
        </>
    );
}

export default Home
