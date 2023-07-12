import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={17} color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
