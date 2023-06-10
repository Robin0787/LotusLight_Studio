import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import DashboardHome from "../Pages/Dashboard/Home/DashboardHome";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                element: <Instructors/>
            },
            {
                path: '/classes',
                element: <p className="text-3xl text-center py-10">Classes</p>
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
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/manage-classes',
                element: <p>Manage Classes</p>
            },
            {
                path: '/dashboard/manage-users',
                element: <p>Manage Users</p>
            },
            {
                path: '/dashboard/add-class',
                element: <p>Add a Class</p>
            },
            {
                path: '/dashboard/my-classes',
                element: <p>My Classes</p>
            },
            {
                path: '/dashboard/selected-classes',
                element: <p>Selected Classes</p>
            },
            {
                path: '/dashboard/enrolled-classes',
                element: <p>Enrolled Classes</p>
            },
            {
                path: '/dashboard/payment',
                element: <p>Payment</p>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])


export default routes;