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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminPage from "../Pages/Dashboard/AdminPageRoot/AdminPage";
import AddEvents from "../Pages/Dashboard/Events/AddEvents/AddEvents";
import AddSpecialOffers from "../Pages/Dashboard/AddSpecialOffers/AddSpecialOffers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllEvents from "../Pages/Dashboard/Events/AllEvents/AllEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "rooms",
        loader: async () => {
          const response = await fetch("/public/rooms.json");
          return response.json();
        },
        element: <Rooms />,
      },
      {
        path: "booking",
        element: (
          <PrivateRoute>
            <BookingForm />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "events/:id",
        // eslint-disable-next-line no-unused-vars
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5001/events/${params.id}`
          );
          return response.json();
        },
        element: <EventsDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <Error />,
    children: [
      {
        path: "/admin/",
        element: <AdminHome />,
      },
      {
        path: "allEvents",
        loader: async () => {
          const response = await fetch(
            `http://localhost:5001/events`
          );
          return response.json();
        },
        element: <AllEvents />,
      },
      {
        path: "addEvents",
        element: <AddEvents />,
      },
      {
        path: "addSpecialOffers",
        element: <AddSpecialOffers />,
      },
    ],
  },
]);

export default router;
