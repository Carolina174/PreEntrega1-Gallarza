import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();

    console.log(userData);
    //acá quiero volver al home
    navigate("/");
  };

  const funcionDeLosInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <form action="" onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          name="name"
          onChange={funcionDeLosInput}
        />
        <input
          type="text"
          placeholder="ingrese su apellido"
          name="lastName"
          onChange={funcionDeLosInput}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
