import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer";
const ItemList = ({ items }) => {
  return (
    <section className={"sectionCard"}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item}></ProductCard>
      ))}
    </section>
  );
};

export default ItemList;
