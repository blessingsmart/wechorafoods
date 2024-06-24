import React, { lazy } from "react";
import Loading from "../src/components/loading";
import { createBrowserRouter }  from "react-router-dom";
import Test from "./pages/Dashboard/test";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/dashboard"));
const Profile = lazy(() => import("./pages/Dashboard/profile"));
const Calory = lazy(() => import("./pages/Dashboard/calory"));
const Smoothie = lazy(() => import("./pages/Dashboard/smoothie"));
const MealPlan = lazy(() => import("./pages/Dashboard/mealPlan"));
const WeightGain = lazy(() => import("./pages/Dashboard/mealplan/weightGain"));
const WeightLoss = lazy(() => import("./pages/Dashboard/mealplan/weightLoss"));
const PaymentPlan = lazy(() => import("./pages/Dashboard/mealplan/paymentPlan"));

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
        path: "/calory",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Calory />
            </React.Suspense>
        ),
    },
    {
        path: "/smoothie",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Smoothie />
            </React.Suspense>
        ),
    },
    {
        path: "/test",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Test />
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
        path: "/mealPlan",
        element: (
            <React.Suspense fallback={<Loading />}>
                <MealPlan />
            </React.Suspense>
        ),
    },
    {
        path: "/weightGain",
        element: (
            <React.Suspense fallback={<Loading />}>
                <WeightGain />
            </React.Suspense>
        ),
    },
    {
        path: "/weightLoss",
        element: (
            <React.Suspense fallback={<Loading />}>
                <WeightLoss />
            </React.Suspense>
        ),
    },
    {
        path: "/paymentPlan",
        element: (
            <React.Suspense fallback={<Loading />}>
                <PaymentPlan />
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
]);

export default BrowserRouter;