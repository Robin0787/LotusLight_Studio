import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])


export default routes;