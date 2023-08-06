import CounterContainer from "../../common/counter/CounterContainer";

const Item = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  if (!product) {
    return <p>El producto no existe.</p>;
  }
  return (
    <>
      <h1>{product.title}</h1>
      <h3>Precio: {product.price}</h3>
      <h5>Detalle:{product.description}</h5>
      <img src={product.image} alt="" />

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      ></CounterContainer>
    </>
  );
};

export default Item;
