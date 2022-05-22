import React, { useContext } from "react";
import { UserContent } from "./useContext/UserContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Cliente from "./Cliente";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import Swal from "sweetalert2";

export default function Orden() {
  const { cart, setCart } = useContext(UserContent);
  const { cliente, setCliente } = useContext(UserContent);

  

  const sendOrder = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Pedidos"), {
        Cliente: cliente,
        Pedido: cart,
        status: "Pendiente",
        dateOrder: Timestamp.fromDate(new Date()),
      });

      Swal.fire({
        customClass: {
          confirmButton: 'swalBtnColor'
        },
        title: 'El pedido será enviado',
        imageUrl: 'https://c.tenor.com/BF6y5PqiGN4AAAAC/popeye-eating.gif',
        imageWidth: 200,
        imageHeight: 130,
        confirmButton: 'swalBtnColor',
        container: 'body'
      });

     

     
      console.log(docRef);
    } catch (e) {
      console.log("error", e);
    }
    setCliente("");
    setCart([]);
  };

  const deleteProduct = (id) => {
    const existProducts = cart.find((item) => item.id === id);
    if (existProducts.cant === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...existProducts, cant: existProducts.cant - 1 }
            : item
        )
      );
    }
  };

  const itemsPrice = cart.reduce((a, c) => a + c.cant * c.price, 0);

  return (
    <section>
      <div className="contTotalEnviar">
      <section className="contBtnEnviar">
       <button className="btn btn-danger" id="btnEnviar" onClick={sendOrder}>
          Enviar 
        </button>
        </section>
        <section className="contTotal">
        <p> Total: {" "}
          <strong>${parseFloat(itemsPrice).toFixed(2)}</strong>{" "}
        </p>
      </section>
      </div>
     <Cliente/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {cart.map((item) => {
          return (
              <tr key={item.id}>
                <th scope="row">{item.name}</th>
                <th> {item.cant}</th>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteProduct(item.id)}
                    id="iconoDelete"
                    key={item.id}
                  />
                </td>
              </tr>
            );
        })}
        </tbody>
      </table>
      

      
      
    </section>
    
  );
}
