import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === id
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(id ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [id]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
