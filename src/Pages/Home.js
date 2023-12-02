import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const cards1 = [
    {
      title: "Add team",
      desc: "Enter details of a new team and add it into the database",
      buttonText: "Add new team",
      url: "/team/add",
    },
    {
      title: "Update team",
      desc: "Enter new details of a team and update it in the database",
      buttonText: "Update team",
      url: "/team/update",
    },
    {
      title: "View stats",
      desc: "View number of played games, wins and draws of a team in a year",
      buttonText: "View stats",
      url: "/team/stats",
    },
  ];
  const cards2 = [
    {
      title: "Delete team",
      desc: "Search for a team in the database and delete it",
      buttonText: "Delete team",
      url: "/team/delete",
    },
    {
      title: "Display 10 teams",
      desc: "Display the first ten teams which has won more than a particular number of times",
      buttonText: "Win threshold",
      url: "/team/displayten",
    },
    {
      title: "Display all teams",
      desc: 'View all the teams and the average "for goals" in a year',
      buttonText: "Display all teams",
      url: "/team/displayall",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center mt-5">Football Data Manager</h2>
      <div className="d-flex justify-content-center ms-5 flex-row mt-5">
        {cards1.map((card, ind) => {
          return (
            <Card
              title={card.title}
              desc={card.desc}
              buttonText={card.buttonText}
              url={card.url}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-center ms-5 flex-row mt-5">
        {cards2.map((card, ind) => {
          return (
            <Card
              title={card.title}
              desc={card.desc}
              buttonText={card.buttonText}
              url={card.url}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card({ title, desc, buttonText, url }) {
  return (
    <div className="col-4">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title text-center">{title}</h5>
          <p class="card-text">{desc}</p>
          <div className="d-flex justify-content-center">
            <Link to={url} class="btn btn-primary">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
