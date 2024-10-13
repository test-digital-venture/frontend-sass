import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/404";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
