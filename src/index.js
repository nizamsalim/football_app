import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AddTeam from "./Pages/AddTeam";
import UpdateTeam from "./Pages/UpdateTeam";
import DeleteTeam from "./Pages/DeleteTeam";
import TeamStats from "./Pages/TeamStats";
import DisplayTenTeams from "./Pages/DisplayTenTeams";
import DisplayAllTeams from "./Pages/DisplayAllTeams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
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
      {
        path: "/team/stats",
        element: <TeamStats />,
      },
      {
        path: "/team/displayten",
        element: <DisplayTenTeams />,
      },
      {
        path: "/team/displayall",
        element: <DisplayAllTeams />,
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
