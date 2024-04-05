import React, { lazy } from "react";
import Loading from "../src/components/loading";
import { createBrowserRouter }  from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/Login"));
const SideNav = lazy(() => import("./components/sideNav"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const Calory = lazy(() => import("./components/calory"));

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
        path: "/about",
        element: (
            <React.Suspense fallback={<Loading />}>
                <About />
            </React.Suspense>
        ),
    },
    {
        path: "/signup",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Signup />
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
    {
        path: "/sidenav",
        element: (
            <React.Suspense fallback={<Loading />}>
                <SideNav />
            </React.Suspense>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Dashboard />
            </React.Suspense>
        ),
    },
    {
        path: "/profile",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Profile />
            </React.Suspense>
        ),
    },
    {
        path: "/calory",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Calory/>
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;