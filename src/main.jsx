import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import AddCoffee from "./Components/AddCoffee.jsx";
import Updatecoffee from "./Components/Updatecoffee.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import Home from "./Components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: <AddCoffee></AddCoffee>,
      },
      {
        path: "uodatecoffee",
        Component: <Updatecoffee></Updatecoffee>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
