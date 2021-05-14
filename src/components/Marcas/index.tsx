import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
//import {api} from '../../pages/services/api';

type Marca = {
    id: string;
    name:string;
    deliverySite: string;
    src: string;
}


type HomeProps = {
    marcaFirstRow: Marca[];
    marcaSecondRow: Marca[];
    marcas: Marca[];
  }

  //const fetchURL = "http://localhost:3333/marcas";
  const fetchURL = "https://my-json-server.typicode.com/Victordalt/uau-project/marcas";
  const getItems = () => fetch(fetchURL).then(res => res.json());
  

export default function Marcas() {    
    
    const [marcas, setMarcas] = useState([]);

    const marcaFirstRow = marcas.slice(0,2);
    const marcaSecondRow = marcas.slice(2,4);
    const marcaThirdRow = marcas.slice(4,6);
    const marcaFourthRow = marcas.slice(6, 8);


    useEffect(()=> {
        getItems().then(data => setMarcas(data));
    },[]);

    
    return (      
        <div className={styles.marcasContainer}>
            <h2>Nossas Marcas</h2>
            <table>
                <tbody>
                <div className={styles.firstRowWrapper}>
                    <tr>                        
                        {marcaFirstRow.map((marca) => {
                            return (
                                <td key={marca.id}>
                                    <div>
                                        <a href={marca.delivery_site}  target="_blank">
                                            <Image 
                                                width={150} 
                                                height={150} 
                                                src={marca.src}
                                                alt=""   
                                                objectFit="cover"                                         
                                            />
                                        </a>                                        
                                    </div>                                    
                                </td>
                            )
                        })}  
                    </tr>
                    <tr>
                        {marcaSecondRow.map((marca, index) => {
                            return (                                
                                <td key={marca.id}>
                                    <div>
                                        <a href={marca.delivery_site}target="_blank">
                                            <Image 
                                                width={150} 
                                                height={150} 
                                                src={marca.src}
                                                alt=""
                                                objectFit="cover"
                                            />
                                        </a>                                        
                                    </div>                                    
                                </td>                                
                            )
                        })}                        
                    </tr>
                </div>
                <div className={styles.secondRowWrapper}>
                    <tr>
                        {marcaThirdRow.map((marca, index) => {
                            return (                                
                                <td key={marca.id}>
                                    <div>
                                        <a href={marca.delivery_site}target="_blank">
                                            <Image 
                                                width={150} 
                                                height={150} 
                                                src={marca.src}
                                                alt=""
                                                objectFit="cover"
                                            />
                                        </a>                                        
                                    </div>                                    
                                </td>                                
                            )
                        })}                        
                    </tr>
                    <tr>
                        {marcaFourthRow.map((marca, index) => {
                            return (                                
                                <td key={marca.id}>
                                    <div>
                                        <a href={marca.delivery_site}target="_blank">
                                            <Image 
                                                width={150} 
                                                height={150} 
                                                src={marca.src}
                                                alt=""
                                                objectFit="cover"
                                            />
                                        </a>                                        
                                    </div>                                    
                                </td>                                
                            )
                        })}                        
                    </tr>
                </div>
                </tbody>
            </table>
        </div>
    )
}
