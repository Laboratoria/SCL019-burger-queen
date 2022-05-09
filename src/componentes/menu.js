import React from "react";

function Menu(){
    return(
        <div className="container">
            <div className="titulo-logo">
                <h1 className="menu-one">Menú 1</h1>
                <img className="img-logo"
                    //  src= {require ('../img/logo-BQ.png')}
                     alt="Logo de Burger Queen"/>
            </div>
            <div className="button-menu">
                <button className="button-dishes">plato 1</button>
            </div>
            <div className="resum-menu-client"></div>
        </div>
    )
}

export default Menu;