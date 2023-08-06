import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
/* import FormFormik from "../components/pages/formFormik/FormFormik";
FormFormik */
export const routes = [{
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer,


    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element: ItemListContainer,
    },
    {
        id: "item",
        path: "/item/:id",
        Element: ItemDetailContainer,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CartContainer,
    },
    {
        id: "home",
        path: "*",
        Element: ItemListContainer,
    },

    {
        id: "dashboard",
        path: "/dashboard",
        Element: Dashboard,
    },


];