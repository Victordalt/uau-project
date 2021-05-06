import React from 'react';
import styles from './styles.module.scss';




export default function Contato() {

    function confirmationPopup() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }


    return (
        <div className={styles.contatoContainer}>
            <h2>Fale conosco!</h2>
            <form action="mailto:victordalt@hotmail.com" method="POST" > 
                <div className={styles.firstRow}>
                    <input type="text" placeholder="Seu Nome" className="name" name="name"/>
                    <input type="text" placeholder="Seu E-mail" className="email" name="email"/>
                </div>  
                <div className={styles.secondRow}>
                    <ul>
                        <li><input type="text" placeholder="Assunto" className="subject" name="subject"/></li>
                        <li><textarea placeholder="Mensagem" className="message" name="message"/></li>                        
                    </ul>          
                </div>              
                <input type="submit" onClick={confirmationPopup} value="Enviar" />
                <span className={styles.popuptext} id="myPopup">Popup text...</span>
            </form>
        </div>
    )
}
