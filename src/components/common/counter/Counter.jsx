import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <Button
        color="secondary"
        disabled={counter <= 1}
        variant="contained"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </Button>
      <h1>{counter}</h1>
      <Button
        disabled={counter >= stock}
        variant="contained"
        color="secondary"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
