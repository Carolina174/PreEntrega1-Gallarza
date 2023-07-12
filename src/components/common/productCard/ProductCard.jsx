import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${item.id}`}>
          <Button size="small" variant="contained">
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
