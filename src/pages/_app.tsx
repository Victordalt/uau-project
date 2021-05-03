import Description from "../components/Description";
import Marcas from "../components/Marcas";
import Navbar from "../components/Navbar";
import  "../styles/global.scss";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Navbar />
        <Component {...pageProps} />
        <div className="mainContent">
          <Description/>
          <Marcas/>
        </div>
        
      </main>
      
    </>
    
  )
}

export default MyApp
