import React from "react";
import '../stylesheet/menu.css';
import  MenuOne  from "../data/menuOne.json";
function Menu(){
    return(
        <div className="container">
            <div className="titulo-menu">
                <h1 className="menu-one">Menú 1</h1>
            </div>
            <div className="button-menu">
                {MenuOne.map( menuOne => {
                    return(
                        <button className="button-dishes">
                            {`${menuOne.name} s/. ${menuOne.price}`}
                        </button>
                    )
                })
}
            </div>
        </div>
    )
}

export default Menu;