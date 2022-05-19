import { Link } from "react-router-dom";
import breakfast from "../breakfast.json";
//import Button from "./button"
import { useState } from "react";
import Cart from "./cart";
/* import { traerMenu } from "../firebase/firebaseFunctions" */

const Breakfast = () => {
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

      {breakfast.map((brekkie) => (
        <button
          className="foodButton"
          key={brekkie.id}
          onClick={() => onAdd(brekkie)}
        >
          {" "}
          {brekkie.name} ${brekkie.precio}
        </button>
      ))}

      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>

      {/* 

        <button onClick={() => traerMenu()}>click me</button> */}
    </>
  );
};
export default Breakfast;
