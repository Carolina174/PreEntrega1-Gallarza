import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";

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
        path: "/category/:id",
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
];