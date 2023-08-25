import { createBrowserRouter } from "react-router-dom";
import HeaderLayout from "./components/header/HeaderLayout";
import Home from "./pages/Home";
import StockItens from "./pages/StockItens";
import IndividualItem from "./pages/IndividualItem";
import NewItem from "./pages/NewItem";
import EditItem from "./pages/EditItem";
import loadItem from "./loaders/loader";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "stock-itens",
                element: <StockItens />
            },
            {
                path: "stock-itens/:productId/:productName",
                element: <IndividualItem />,
                loader: loadItem,
            },
            {
                path: "new-item",
                element: <NewItem />
            },
            {
                path: "stock-itens/edit/:productId",
                element: <EditItem />,
                loader: loadItem
            }
        ]
    }
])

export default router