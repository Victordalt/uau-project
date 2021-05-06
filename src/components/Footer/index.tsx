import React from 'react'
import styles from './styles.module.scss';



export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contentContainer}>
                <img src="./Logo_Endereco.png" alt=""/>
                <ul className={styles.footerLinks}>
                    <div>
                    <li><a href="#">HOME</a></li>
                    
                    <li><a href="#description">SOBRE NOS</a></li> 
                                                                
                    <li><a href="#marcas">MARCAS</a></li>
                    
                    <li><a href="#contato">CONTATO</a></li>
                    </div>                   
                </ul>
                <div className={styles.iconsContainer}>
                    <a href="https://www.instagram.com/somosuaucompany/" target="_blank"><img src="./instagramIcon.png" alt=""/></a>
                    <a href="https://www.linkedin.com/company/uau-company/" target="_blank"><img src="./linkedinIcon.png" alt=""/></a>
                    <a href="https://api.whatsapp.com/send?phone=5571981075282&text=Hello" target="_blank"><img src="./whatsappIcon.png" alt=""/></a>
                </div>
            </div>
            <p>Copyright © 2016 - 2021 Uau Company. Desenvolvimento por Victor Dallarosa</p>
        </div>
    )
}
