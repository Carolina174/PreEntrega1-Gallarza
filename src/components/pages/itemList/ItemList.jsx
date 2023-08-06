import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer";
import Skeleton from "@mui/material/Skeleton";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4];
  return (
    <section className={"sectionCard"}>
      {items.length > 0
        ? items.map((item) => (
            <ProductCard key={item.id} item={item}></ProductCard>
          ))
        : arr.map((elemento) => (
            <Skeleton
              key={elemento}
              variant="rounded"
              width={210}
              height={60}
            />
          ))}
    </section>
  );
};

export default ItemList;
