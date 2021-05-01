import styles from './styles.module.scss';
import Image from 'next/image';
import React,{useState} from 'react';




export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    function changeBackground() {        
        if (window.scrollY >= 80){            
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    
    window.addEventListener('scroll', changeBackground);


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
                    <li><a>HOME</a></li>
                    
                    <li><a>SOBRE NOS</a></li> 
                                                                   
                    <li><a>MARCAS</a></li>
                    
                    <li><a>CONTATO</a></li>
                </ul>                
            </nav>            
        </div>
        
    )
}


