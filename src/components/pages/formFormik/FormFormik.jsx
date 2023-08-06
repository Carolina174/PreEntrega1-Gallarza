/* import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FormFormik = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      repeatEmail: "",
      phone: "",
    },
    onSubmit: (data) => {
      // Verificar si los correos electrónicos coinciden
      if (data.email !== data.repeatEmail) {
        alert("Los correos electrónicos no coinciden.");
        return;
      }

      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };

      cart.forEach((elemento) => {
        let refDoc = doc(db, "products", elemento.id);
        updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });

      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, order).then((res) => setOrderId(res.id));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Debe tener al menos 5 caracteres")
        .max(15),
      lastName: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Debe tener al menos 5 caracteres")
        .max(15),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      repeatEmail: Yup.string()
        .oneOf(
          [Yup.ref("email"), null],
          "Los correos electrónicos deben coincidir"
        )
        .required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "40px" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            name="lastName"
            onChange={handleChange}
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
          />

          <TextField
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            type="text"
            label="Repita su Email"
            variant="outlined"
            name="repeatEmail"
            onChange={handleChange}
            error={errors.repeatEmail ? true : false}
            helperText={errors.repeatEmail}
          />

          <TextField
            type="text"
            label="Teléfono"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <Button variant="contained" type="submit">
            Comprar
          </Button>
        </form>
      ) : (
        <h1>La orden es {orderId}</h1>
      )}
    </div>
  );
};

export default FormFormik;
 */
