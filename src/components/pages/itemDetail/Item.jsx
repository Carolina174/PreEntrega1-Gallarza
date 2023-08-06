import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";

const Item = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  if (!product) {
    return <p>El producto no existe.</p>;
  }
  return (
    <div className="container">
      <h1 className="title">{product.title}</h1>
      <h5>Descripción: {product.description}</h5>
      <h4>Precio: $ {product.price}</h4>

      <img src={product.image} alt="" />

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      ></CounterContainer>
    </div>
  );
};

export default Item;
