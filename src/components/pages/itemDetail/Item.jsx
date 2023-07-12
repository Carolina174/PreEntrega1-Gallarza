import CounterContainer from "../../common/counter/CounterContainer";

const Item = ({ product, agregarAlCarrito }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <h3>{product.description}</h3>

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      ></CounterContainer>
    </div>
  );
};

export default Item;
