import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import "./cartContainer.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "¿Esta seguro que lo desea eliminar? ",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `No eliminar`,
      /* denyButtonColor: red, */
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado exitosamente!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se realizaron cambios", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div className="container">
      {cart.length > 0 && (
        <>
          <h2>Productos seleccionados:</h2>

          {cart.map((elemento) => {
            return (
              <div
                key={elemento.id}
                className="productos"
                /* style={{ width: "200px", border: "2px solid " }} */
              >
                <h2>{elemento.title}</h2>
                <h2>Precio: ${elemento.price}</h2>
                <h3>Cantidad: {elemento.quantity}</h3>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => deleteById(elemento.id)}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
          <h2>El total a pagar es: ${total} </h2>
          <Button variant="outlined" color="secondary" onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button variant="outlined" color="secondary">
              Finalizar Compra
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
