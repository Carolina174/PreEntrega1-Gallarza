import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

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
            <Button variant="contained" onClick={() => deleteById(elemento.id)}>
              {" "}
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button variant="outlined" onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button variant="outlined">Finalizar Compra</Button>
          </Link>
        </>
      )}

      <h2>El total a pagar es: {total} </h2>
    </div>
  );
};

export default CartContainer;
