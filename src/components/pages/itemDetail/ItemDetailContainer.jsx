import Item from "./Item";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  let { id } = useParams();

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getTotalQuantityById(id);

  useEffect(() => {
    let referenciaColl = collection(db, "products");
    let referenciaDoc = doc(referenciaColl, id);

    getDoc(referenciaDoc).then((res) => {
      if (res.exists()) {
        setProduct({ ...res.data(), id: res.id });
      } else {
        setProduct(null); // Establecer product como null si no existe
      }
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Item
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
};

export default ItemDetailContainer;
