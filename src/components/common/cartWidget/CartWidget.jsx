import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={17} color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
