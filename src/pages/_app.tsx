import { useEffect, useState } from "react";
import Contato from "../components/Contato";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Marcas from "../components/Marcas";
import Navbar from "../components/Navbar";
import  "../styles/global.scss";


function MyApp({ Component, pageProps }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <main >
        <Navbar />
        <div className="wrapper">
          <Component {...pageProps} />
          <div className="mainContent" id="home">
            <a className="descriptionAnchor" id="description"></a>
            <Description/>
            <div className="divider"></div>
            <a className="marcasAnchor" id="marcas"></a>
            <Marcas/>
            <div className="divider"></div>
            <a className="contatosAnchor" id="contato"></a>
            <Contato/>
            <div className="divider"></div>          
          </div>       
          <Footer /> 
        </div>
      </main>
    </>
  )
}

export default MyApp
