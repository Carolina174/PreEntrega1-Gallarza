import Item from "./Item";
import { products } from "../../../productsMock";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });

    promesa.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
  };

  return <Item product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
