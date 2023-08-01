import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>

      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid blue" }}
          >
            <h2>{elemento.title}</h2>
            <h2>{elemento.price}</h2>
            <h3>Cantidad: {elemento.quantity}</h3>
            <button onClick={() => deleteById(elemento.id)}> Eliminar</button>
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default CartContainer;
