import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import * as Scroll from 'react-scroll';

let Events    = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;
var Link      = Scroll.Link;
var scroll    = Scroll.animateScroll;

export default function Footer() {

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
        <div className={styles.footerContainer}>
            <div className={styles.wrapper}>
                <div className={styles.contentContainer}>
                    <ul className={styles.footerLinks}>
                        <div>
                            <li><a onClick={scrollToTop}>HOME</a></li>
                            <li><Link to="description" spy={true} smooth={true} offset={50} duration={500}>SOBRE</Link></li> 
                            <li><Link to="marcas" spy={true} smooth={true} offset={50} duration={500}>MARCAS</Link></li>
                            <li><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>CONTATO</Link></li>
                        </div>                   
                    </ul>
                    <div className={styles.logoEndContainer}>
                        <img src="./uauLogo.png" alt=""/>
                        <span>Rua das Angélicas, 175, Itaigara</span>
                        <span>Salvador-BA, Brasil 41810-060</span>
                    </div>
                    <div className={styles.iconsContainer}>
                        <a href="https://www.instagram.com/somosuaucompany/" target="_blank"><img src="./instagramIcon.png" alt=""/></a>
                        <a href="https://www.linkedin.com/company/uau-company/" target="_blank"><img src="./linkedinIcon.png" alt=""/></a>
                        <a href="https://api.whatsapp.com/send?phone=5571981075282&text=Hello" target="_blank"><img src="./whatsappIcon.png" alt=""/></a>
                    </div>
                </div>
            </div>
            <div className={styles.copyrightContainer} text-align="center">
                <span>Copyright © 2016-2021 Uau Company. Developed by @Victordalt</span>
            </div>
            
        </div>
    )
}
