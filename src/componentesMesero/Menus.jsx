import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../imagenes/logobq.png";
// import {Link} from 'react-router-dom';

function Menus(dataMenu, showProducts) {
    return (
        
        <section className="section-menu">
             <Link to="/" className="route"><img src={Logo} alt="logo restaurante burger-queen" className="logo-bq" /></Link>
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse>
                    <nav className="menu-nav">

                        <button className="button-menu">Desayuno</button>
                        <button className="button-menu">Hamburguesas</button>
                       <button className="button-menu">Acompañamientos</button>
                       

                    </nav>
                </Navbar.Collapse>
            </Navbar>
            <section className="section-productos">
                <div className="section-div"></div>
            </section>
        </section>
    )
}

export default Menus;