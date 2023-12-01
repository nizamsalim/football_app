import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="detail">
        <Outlet />{" "}
      </div>
      <div className="detail">
        <h1 className="main-heading">Elevate Your Team's Performance</h1>
        <p className="intro">
          Explore a world of football management excellence with TeamStats Hub. Our
          user-friendly platform puts you in control, allowing you to effortlessly
          manage and analyze your team's data.
        </p>

        <div className="features">
          <h2>Key Features</h2>
          <ol>
          <li>
            <strong>Team Information Form:</strong> Add detailed information
            about your football team – from games played to goals scored. Stay on
            top of every match's stats and watch your team's journey unfold.
          </li>
          <li>
            <strong>Update Team Form:</strong> Keep your records accurate and
            up-to-date. Our intuitive update form lets you modify existing team
            information with ease, ensuring your data reflects the latest
            achievements.
          </li>
          <li>
            <strong>Team Statistics Display:</strong> Get a comprehensive
            overview of your team's performance. Total games played, draws, and
            wins are neatly displayed, giving you insights at a glance.
          </li>
          <li>
            <strong>Record Deletion Interface:</strong> Streamlined and
            straightforward, our record deletion interface allows you to remove
            specific entries effortlessly. Manage your data with confidence.
          </li>
          <li>
            <strong>Display First 10 Records:</strong> Stay organized by quickly
            accessing the first 10 records from your database. It's the perfect
            way to review recent matches or track your team's progress.
          </li>
        </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
