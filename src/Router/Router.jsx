import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import Booking from "../Pages/Booking/Booking";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"rooms",
                element:<Rooms/>
            },
            {
                path:"booking",
                element:<Booking/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
]);

export default router;