import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router;