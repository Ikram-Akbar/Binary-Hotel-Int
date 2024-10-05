import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import BookingForm from "../Pages/Booking/BookingForm";
import EventsDetails from "../Components/Events/EventsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "rooms",
                element: <Rooms />
            },
            {
                path: "booking",
                element: <BookingForm />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "events/:id",
                // eslint-disable-next-line no-unused-vars
                loader: async ({ params }) => {
                    const response = await fetch("/public/events.json");
                    return response.json();
                },
                element: <EventsDetails />,
            }
        ]
    }
]);

export default router;
