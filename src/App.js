import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="detail">
        <Outlet />{" "}
      </div>
    </div>
  );
}

export default Home;
