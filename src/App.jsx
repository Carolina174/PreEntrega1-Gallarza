import Navbar from "./components/layout/navbar/navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a ACRUX personalizaciones"} />
    </div>
  );
}

export default App;
