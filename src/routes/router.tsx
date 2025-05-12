import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AnimationViewer from "../pages/AnimationViewer";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/animations/:type", element: <AnimationViewer /> },
]);
