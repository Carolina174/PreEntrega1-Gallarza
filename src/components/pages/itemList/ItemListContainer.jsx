import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    let productsCollection = collection(db, "products");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProductos);
    });
  }, [categoryName]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
