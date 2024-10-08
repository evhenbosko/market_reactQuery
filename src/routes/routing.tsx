import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Index from "../pages/Index"
import About from "../pages/About";
import Basket from "../pages/Basket";
import Favorites from "../pages/Favorites";
import Contacts from "../pages/Contacts";
import Products from "../pages/Products";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
            element: <Index/>,
            index:true
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/basket',
                element: <Basket/>
            },
            {
                path:'/favorites',
                element: <Favorites/>
            },
            {
                path:'/contacts',
                element: <Contacts/>
            },
            {
                path:'/products',
                element: <Products/>
            }

        ]
    }
])