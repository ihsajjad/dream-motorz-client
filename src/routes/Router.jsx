import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../shared/404/NotFound";
import AddAToy from "../pages/addAToy/AddAToy";
import PrivetRoute from "./PrivetRoute";
import About from "../pages/about/About";
import AllToys from "../pages/allToys/AllToys";
import ToyDetails from "../pages/allToys/toyDetails/ToyDetails";
import MyToys from "../pages/myToys/MyToys";
import UpdateToy from "../pages/myToys/updateToy/UpdateToy";
import Blog from "../pages/blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-a-toy',
                element: <PrivetRoute><AddAToy /></PrivetRoute>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blogs',
                element: <Blog />
            },
            {
                path: '/all-toys',
                element: <AllToys />
            },
            {
                path: '/all-toys/:id',
                element: <PrivetRoute><ToyDetails /></PrivetRoute>,
                loader: ({params}) => fetch(`https://dream-motorz-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/my-toys',
                element: <PrivetRoute><MyToys /></PrivetRoute>
            },
            {
                path: '/update-toy/:id',
                element: <UpdateToy />,
                loader: ({params}) => fetch(`https://dream-motorz-server.vercel.app/products/${params.id}`)
            }
        ]
    }
])

export default router;