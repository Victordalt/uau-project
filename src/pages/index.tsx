import styles from './home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
//import {api} from './services/api';
import { useEffect, useState } from 'react';





export default function Home() {
  
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);

   
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);


      return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <div className={styles.container}>
      <Head>              
        <title>Uau Company</title>
      </Head>

      <div className={styles.imageStack}>
        <img
          className={styles.backgroundImg}          
          src="/mosaic_5x5.png" 
          alt="Background"                         
        />        
        <img 
          className={styles.logoImg}
          src="/logo_nome.png" 
          alt="logo"                         
        />         
      </div>
    </div>
  )
}


