import React, { lazy } from "react";
import Loading from "../src/components/loading";
import { createBrowserRouter }  from "react-router-dom";

const Home = lazy(() => import("./Pages/home"));
const Login = lazy(() => import("./pages/login"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Home />
            </React.Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Login />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;