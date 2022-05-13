import React from "react";
import LogoSmall from "../componentes/logoSmall";
import "../stylesheet/salon.css"

function Salon() {
  return (
    <div className="container-salon">
      <div className="container-logo">
        <p className="text-salon">Salón</p>
        <LogoSmall />
      </div>
      <div className="comandas">Aquí va el resumen de comandas </div>
      <div>
        <div className="button-agregar-usuario">
          <img
            className="img-agregar-usuario"
            src={require("../img/agregar-usuario.png")}
            alt="Agregar usuario"
          />
        </div>
      </div>
    </div>
  );
}

export default Salon;
