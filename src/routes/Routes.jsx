import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error404_PageNotFound from "../pages/Error404_PageNotFound/Error404_PageNotFound";
import Root from "../layout/Root";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import TouristSpots from "../pages/TouristSpots/TouristSpots";
import AddSpots from "../pages/AddSpots/AddSpots";
import MyList from "../pages/MyList/MyList";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateTouristSpots from "../pages/UpdateTouristSpots/UpdateTouristSpots";
import TouristSpotsByCountry from "../pages/TouristSpotsByCountry/TouristSpotsByCountry";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404_PageNotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot"),
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: "/error",
                element: <Error404_PageNotFound />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/all-tourists-spot",
                element: <TouristSpots />,
                loader: () => fetch("https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot")
            },
            {
                path: "/viewDetails/:id",
                element: <PrivateRoute> <ViewDetails /> </PrivateRoute>,
            },
            {
                path: "/add-tourist-spot",
                element: <PrivateRoute><AddSpots /></PrivateRoute>
            },
            {
                path: "/my-list",
                element: <PrivateRoute><MyList /></PrivateRoute>
            },
            {
                path: "/update-tourist-spot/:id",
                element: <PrivateRoute><UpdateTouristSpots /></PrivateRoute>
            },
            {
                path: "/country/:country",
                element: <PrivateRoute><TouristSpotsByCountry /></PrivateRoute>,
                loader: ({params}) => fetch(`https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot/country/${params.country}`)
            }
        ]
    }
]);

export default Routes;