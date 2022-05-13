const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const precioFinal = cartItems.reduce(
    (acumulador, actual) => acumulador + actual.precio * actual.qty,
    0
  );

  return (
    <>
      <h2> Pedido</h2>
      <input id="inputName" type="text" placeholder="Name"></input>
      <div className="Pedido">
        {cartItems.length === 0 && <div>Empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => onRemove(item)} className="modifyButton">
              -
            </button>{" "}
            <button onClick={() => onAdd(item)} className="modifyButton">
              +
            </button>
            {item.qty} x ${item.precio}
          </div>
        ))}
        {cartItems.length !== 0 && <p>Total ${precioFinal}</p>}

        <div className="row">
          <button onClick={() => alert("Implement Checkout!")}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
