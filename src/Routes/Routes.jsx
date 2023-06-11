import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import DashboardHome from "../Pages/Dashboard/Home/DashboardHome";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import UpdateClass from "../Pages/Dashboard/Instructor/MyClasses/UpdateClass/UpdateClass";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import UserRoute from "./UserRoute";

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
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: '/dashboard/manage-users',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: '/dashboard/add-class',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
                path: '/dashboard/my-classes',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },
            {
                path: '/dashboard/update-class/:id',
                element: <InstructorRoute><UpdateClass /></InstructorRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/class-details/${params.id}`)
            },
            {
                path: '/dashboard/selected-classes',
                element: <UserRoute><p>Selected Classes</p></UserRoute>
            },
            {
                path: '/dashboard/enrolled-classes',
                element: <UserRoute><p>Enrolled Classes</p></UserRoute>
            },
            {
                path: '/dashboard/payment',
                element: <UserRoute><p>Payment</p></UserRoute>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])


export default routes;