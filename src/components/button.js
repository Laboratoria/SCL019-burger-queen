import { useState } from "react";

let pedido = []; 
const Button = ({ text }) => {
  const [valorSeleccionado, setValorSeleccionado] = useState("");
  pedido.concat(valorSeleccionado) 
  return (
    <div>
      <button className="foodButton" onClick={() => setValorSeleccionado(text)}>
        {text}
      </button>
      <p className="order">{valorSeleccionado}</p>
      {console.log(pedido)}
      {/*    <h1>{pedido}</h1> */}
    </div>
  );
};

export default Button;
