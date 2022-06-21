 import lunch from "../lunch.json"
 import { useState } from "react";
 import Cart from "./cart";
import { Link } from "react-router-dom"

const Lunch = () => {
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
  
  
    };
  
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
  
    return (
      <>
        <Link to="/">
          <button> Back to Home</button>
        </Link>
  
        {lunch.map((lunchito) => (
          <button
            className="foodButton"
            key={lunchito.id}
            onClick={() => onAdd(lunchito)}
          >
            {" "}
            {lunchito.name} ${lunchito.precio}
          </button>
        ))}
  
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
  
        {/* 
  
          <button onClick={() => traerMenu()}>click me</button> */}
      </>
    );
  };
export default Lunch 