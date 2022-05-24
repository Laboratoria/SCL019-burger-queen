import {useEffect, useState, Fragment} from "react";
// import {Carta} from "../firebase";
import '../filesCss/Menu.css';
import logo2 from '../imagenes/logo2.jpg';
import {Link} from "react-router-dom";
import { collection, onSnapshot, query, orderBy, 
} from  'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { db } from "../firebase";

function Cocina() {

    const [cartaChef, setcartaChef] = useState([])

    useEffect(() => {

        
 const orden = collection(db, "Pedido");
 const q = query(orden, orderBy("fecha", "desc"));
 const getOrders = onSnapshot(q, (snapshot) =>
              setcartaChef(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ); 
            return getOrders;
        

        // Carta().then((item) => {
        //     setcartaChef(item)
        //     console.log(item)
        // })
    }, [])


    return (

        <div className="Menu">
            <header className="Menu-header">
                {/* //MEnu-header tiene todo el diseño del header y llega hasta  */}
                <div className="MenuLogo">
                    <img src={logo2}
                        className="Menu-logo"
                        alt="logotipo"/>
                </div>
                <h1>
                    Restaurant BurgerQueen
                </h1>
                <div className='btnSalir'>
                    <button className='btn-exit'>
                        <Link to="/">
                            <h3>Inicio</h3>
                        </Link>
                    </button>
                    <button className='btn-exit'>
                        <Link to="/Menu">
                            <h3>Mesero</h3>
                        </Link>
                    </button>
                </div>
            </header>
          
            <div className="cartOrden">

                {

                cartaChef.map((item) => {
                    return (
                        <div key={
                          item.id
                      } className="caja">
                            <Fragment>
                              
                                <p>nombre:<b> {
                                        item.nombre
                                    }</b>
                                </p>

                                <p>mesa:<b> {
                                        item.mesa
                                    }</b>
                                </p>
                               <p>fecha: {item.status}</p> 

                              {/* <p>fecha: {item.fecha}</p> */}
                                   
                                <p>Orden:<b> {
                                        item.pedido.map((arr) => (
                                            <p key={
                                                arr.id
                                            }>

                                                {
                                                arr.count
                                            }
                                                - {
                                                arr.producto
                                            }</p>
                                        ))
                                    }</b>
                                </p>
                                {/* <button className='Eliminar' type='button'>X</button> */}
                            </Fragment>
                        </div>
                    )

                })
            }
                {/* onClick={() => quitBurger(element.id)} */} </div>
        </div>
    )
}
export default Cocina;
