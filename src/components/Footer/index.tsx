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
            <div className={styles.contentContainer}>
                <img src="./Logo_Endereco.png" alt=""/>
                <ul className={styles.footerLinks}>
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
                <div className={styles.iconsContainer}>
                    <a href="https://www.instagram.com/somosuaucompany/" target="_blank"><img src="./instagramIcon.png" alt=""/></a>
                    <a href="https://www.linkedin.com/company/uau-company/" target="_blank"><img src="./linkedinIcon.png" alt=""/></a>
                    <a href="https://api.whatsapp.com/send?phone=5571981075282&text=Hello" target="_blank"><img src="./whatsappIcon.png" alt=""/></a>
                </div>
            </div>
            <div className={styles.spanContainer} text-align="center">
                <span>Copyright © 2016 - 2021 Uau Company. Desenvolvimento por Victor Dallarosa</span>
            </div>
            
        </div>
    )
}
