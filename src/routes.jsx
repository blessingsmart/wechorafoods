import React, { lazy } from "react";
import Loading from "../src/components/loading";
import { createBrowserRouter }  from "react-router-dom";
import Update from "./pages/Dashboard/update";

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
const AdminDashboard = lazy(() => import("./pages/admin/adminDashboard"));
const Client = lazy(() => import("./pages/admin/clients"));
const Message = lazy(() => import("./pages/admin/message"));
const Trainer = lazy(() => import("./pages/admin/trainer"));
const Settings = lazy(() => import("./pages/admin/settings"));
const AddFitness = lazy(() => import("./pages/admin/settings/addFitness"));
const FitnessDetails = lazy(() => import("./pages/admin/settings/fitnessDetails"));

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
    {
        path: "/update",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Update />
            </React.Suspense>
        ),
    },
    {
        path: "/adminDashboard",
        element: (
            <React.Suspense fallback={<Loading />}>
                <AdminDashboard />
            </React.Suspense>
        ),
    },
    {
        path: "/client",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Client />
            </React.Suspense>
        ),
    },
    {
        path: "/message",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Message />
            </React.Suspense>
        ),
    },
    {
        path: "/trainer",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Trainer />
            </React.Suspense>
        ),
    },
    {
        path: "/settings",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Settings />
            </React.Suspense>
        ),
    },
    {
        path: "/add-fitness",
        element: (
            <React.Suspense fallback={<Loading />}>
                <AddFitness />
            </React.Suspense>
        ),
    },
    {
        path: "/fitnessDetails",
        element: (
            <React.Suspense fallback={<Loading />}>
                <FitnessDetails />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;