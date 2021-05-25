import styles from './styles.module.scss';
import Image from 'next/image';
import React,{useState, useEffect} from 'react';
import * as Scroll from 'react-scroll';

// React-scroll variables
let Events    = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;
var Link      = Scroll.Link;
var scroll    = Scroll.animateScroll;



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
    
    function scrollToTop() {
        scroll.scrollToTop({spy:true, smooth:true, offset:50, duration:500});
    }

    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
          console.log('begin', arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
          console.log('end', arguments);
        });
    
        scrollSpy.update();
      },)
    


    return (
        <div className={navbar ? styles.navbarContainerActive : styles.navbarContainer}>
            <nav> 
                <a onClick={scrollToTop}>
                    <img 
                    width={55} 
                    height={50} 
                    src="/uauLogo.png" 
                    alt="Logo"                     
                    className={styles.navImage}            
                    />  
                </a>                             
                <ul className={styles.navLinks}>
                    <div>
                    <li><a onClick={scrollToTop}>HOME</a></li>
                    <span>|</span>
                    <li><Link to="description" spy={true} smooth={true} offset={50} duration={500}>SOBRE</Link></li> 
                    <span>|</span>                                             
                    <li><Link to="marcas" spy={true} smooth={true} offset={50} duration={500}>MARCAS</Link></li>
                    <span>|</span>
                    <li><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>CONTATO</Link></li>
                    </div>              
                    
                </ul>                
            </nav>            
        </div>
        
    )
}


