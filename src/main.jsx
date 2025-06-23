import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MAinLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import Updatecoffee from "./Components/Updatecoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: <Home></Home>,
      },
      {
        path: "addcoffe",
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
