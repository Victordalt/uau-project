import styles from './styles.module.scss';
import Image from 'next/image';
import React,{useState, useEffect} from 'react';




export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

   
    useEffect(() => {
        function onScroll() {
            if (window.scrollY >= 80){            
                        setNavbar(true);
                    } else {
                        setNavbar(false);
                    }
        }
        window.addEventListener('scroll', onScroll);

    })
    
    


    return (
        <div className={navbar ? styles.navbarContainerActive : styles.navbarContainer}>
            <nav> 
                <Image 
                    width={55} 
                    height={50} 
                    src="/uauLogo.png" 
                    alt="Background"
                    objectFit="cover"              
                />               
                <ul className={styles.navLinks}>
                    <div>
                    <li><a>HOME</a></li>
                    <span>|</span>
                    <li><a>SOBRE NOS</a></li> 
                    <span>|</span>                                             
                    <li><a>MARCAS</a></li>
                    <span>|</span>
                    <li><a>CONTATO</a></li>
                    </div>              
                    
                </ul>                
            </nav>            
        </div>
        
    )
}


