import { useEffect, useState,Fragment } from "react";
import { Carta } from "../firebase";
import '../filesCss/Menu.css';
import logo2 from '../imagenes/logo2.jpg';
import { Link } from "react-router-dom";

function Cocina () {

    const [cartaChef, setcartaChef] = useState([])

useEffect(()=>{
 Carta().then((item)=> {
     setcartaChef(item)
     console.log(item)
 })
}, [])


    return(
        
<div className="Menu">
        <header className="Menu-header">
          {/* //MEnu-header tiene todo el diseño del header y llega hasta  */}
          <div className="MenuLogo">
           <img src={logo2} className="Menu-logo" alt="logotipo" /> 
           </div>
          <h1>
           Restaurant BurgerQueen 
          </h1>  
           <div className='btnSalir'>
           <button className='btn-exit' ><Link to = "/"><h3>Inicio</h3></Link></button>
           <button className='btn-exit' ><Link to = "/Menu"><h3>Mesero</h3></Link></button>
           </div>
         </header> 
         <body></body>
        <div className="cartOrden">
               
           {
               
                cartaChef.map((item)=> {
                  return(
                    <div className="caja">
                   <Fragment key={item.id}>
                    <ul>nombre:<b> {item.nombre}</b></ul>
                    {/* <li></h3></li>N° de Pedido: <h3>{item.id}</h3> */}
                    <li>mesa:<b> {item.mesa}</b></li> 
                    <li>Orden:<b> {item.pedido.map((arr)=>(
                      <p key={arr.id}>
                       
                        {arr.count} - {arr.producto}</p> 
                    )
                    )}</b></li>   
                <button className='Eliminar' type='button' >X</button> 
             </Fragment>
             </div>
                  )
                 
                })
            } 
      {/* onClick={() => quitBurger(element.id)} */}
    </div>
    </div>
    )}
export default Cocina;
