import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";

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
                element: <p className="text-3xl text-center py-10">Instructors</p>
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
    }
])


export default routes;