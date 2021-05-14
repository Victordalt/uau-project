import React from 'react';
import styles from './styles.module.scss';
import {SubmitHandler, useForm} from 'react-hook-form';
import emailjs, { send } from 'emailjs-com';

type Inputs = {
    name: string;
    subject: string;
    email: string;
    message: string;
    
  }


export default function Contato() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Inputs>();
    const onError = (errors, e) => console.log(errors, e);

      

      function sendEmail(e) {        
        
        // e.preventDefault();                

        emailjs.sendForm('service_90x4ir9', 'template_nvozbm8', '#myForm', 'user_bdFMwqxwlNBeWtHydnzCp')
        reset();
        alert("Mensagem enviada com sucesso!")
        // .then((result) => {
        //     console.log(result.text);
        // }).catch((error) => {
        //     console.log(error.text);
        // });
        // e.target.reset();        
      }
     
      

    return (
        <div className={styles.contatoContainer}>
            <h2>Fale conosco!</h2>         
            <form onSubmit={handleSubmit(sendEmail)} id="myForm">
                <div className={styles.firstRow}>
                    <div className={styles.nameWrapper}>
                        <input type="text"  placeholder="Seu Nome" className="name" name="name" {...register("name", {required: "Por favor, digite seu nome." })}/>

                        <span className={styles.errorMessage}>{errors?.name?.message}</span>
                    </div>
                    <div className={styles.emailWrapper}>
                        <input type="text" placeholder="Seu E-mail" className="email" name="email" 
                            {...register("email", 
                                {   required: "Por favor, digite seu email.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Por favor, digite um e-mail valido."
                                    }
                                 })}/>
                        <span className={styles.errorMessage}>{errors?.email?.message}</span>
                    </div>
                </div>  
                <div className={styles.secondRow}>
                    <ul>
                        <li><input type="text" placeholder="Assunto" className="subject" name="subject" {...register("subject", {required: "Por favor, digite o assunto." })}/></li>
                        <span className={styles.errorMessage}>{errors?.subject?.message}</span>
                        <li>
                            <textarea placeholder="Mensagem" className="message" name="message" 
                                {...register("message",
                                        {   required: "Por favor, digite sua mensagem.",

                                            minLength : {
                                            value: 10, 
                                            message: "Sua mensagem deve contar mais de 10 caracteres."
                                            }
                                        ,
                                            maxLength : {
                                            value: 500, 
                                            message: "Sua mensagem deve contar menos de 500 caracteres."
                                        }                            
                                })}/>
                        </li>
                        <span className={styles.errorMessage}>{errors?.message?.message}</span>                        
                    </ul>       
                    <input type="submit" value="Enviar" />                                      
                </div>                    
                           
            </form>
        </div>
    )
}
