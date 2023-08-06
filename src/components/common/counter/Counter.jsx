import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div>
        <Button
          color="secondary"
          disabled={counter <= 1}
          variant="outlined"
          onClick={() => setCounter(counter - 1)}
          size="small"
        >
          -
        </Button>{" "}
        <h1>{counter}</h1>
        <Button
          disabled={counter >= stock}
          variant="outlined"
          color="secondary"
          onClick={() => setCounter(counter + 1)}
          size="small"
        >
          +
        </Button>
      </div>
      <br />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
