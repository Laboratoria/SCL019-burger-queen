import React from "react";
import {Link} from "react-router-dom";
import Logo from "../imagenes/logobq.png";
import Mesero from "../imagenes/rubber-welcome-5.png";
import Chef from "../imagenes/taxi-chef.png";


const StartView = () => {
    return (
    <div className="container-start">
    <div className="logo-start">
        <img src={Logo} alt="logo burger-queen" className="logoStart"/>
    </div>
    <div className="links">
        <Link to="/tables" className="route"><img src={Mesero} alt="logo burger-queen" className="logoStart"/></Link>
        <Link to="/kitchen" className="route"><img src={Chef} alt="logo burger-queen" className="logoStart"/></Link>
        
    </div>
    </div>
    
    )
}

export default StartView;