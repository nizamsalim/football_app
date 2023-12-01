import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AddTeam from "./Pages/AddTeam";
import UpdateTeam from "./Pages/UpdateTeam";
import DeleteTeam from "./Pages/DeleteTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/team/add",
        element: <AddTeam />,
      },
      {
        path: "/team/update",
        element: <UpdateTeam />,
      },
      {
        path: "/team/delete",
        element: <DeleteTeam />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
