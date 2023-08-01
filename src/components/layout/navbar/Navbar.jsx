import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={"navContainer"}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dvritjbwt/image/upload/v1689132678/ux_2_usbj3x.png"
          alt=""
        />
      </Link>

      <ul className="containerCategories">
        <Link to="/">Inicio</Link>
        <Link to="category/vinilo">Vinilo</Link>
        <Link to="category/sublimado">Sublimado</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
