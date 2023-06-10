import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: '/classes',
                element: <p className="text-3xl text-center py-10">Classes</p>
            },
            {
                path: '/dashboard',
                element: <p className="text-3xl text-center py-10">Dashboard</p>
            }
        ]
    },
    {
        path: 'signUp',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])


export default routes;