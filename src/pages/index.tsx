import styles from './home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import {api} from './services/api';





export default function Home() {
  



  return (
    <div className={styles.container}>
      <Head>              
        <title>Uau Company</title>
      </Head>

      <div className={styles.imageStack}>
        <img 
          className={styles.backgroundImg}
          width={1720} 
          height={900} 
          src="/mosaicBgFade.jpg" 
          alt="Background"                         
        />
        <img 
          className={styles.logoImg}
          
          src="/logo_Nome.png" 
          alt="Background"                         
        />          
      </div>
    </div>
  )
}
