import axios from "axios";
import React, { useState } from "react";
import Alert from "../Components/Alert";
import { ClipLoader } from "react-spinners";

function TeamStats() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const team = e.target.team.value;
    const year = e.target.year.value;
    axios
      .get(`http://localhost:5000/football/stats/${team}/${year}`)
      .then((res) => {
        setIsLoading(false);
        if (res.data.success) {
          setTeams(res.data.result);
        } else {
          setTeams({
            team: "",
            win: "",
            gamesPlayed: "",
            draw: "",
          });
        }
      });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          className="row g-3 ms-5 mt-2"
          style={{ width: "55%" }}
          onSubmit={handleSearchSubmit}
        >
          <div className="col-3 w-50">
            <label htmlFor="team" className="form-label">
              Team name
            </label>
            <input type="text" className="form-control" id="team" />
          </div>
          <div className="col-3">
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <input type="text" className="form-control" id="year" />
          </div>

          <div className="col-6 d-flex justify-content-center mt-5 w-25 mb-1">
            <button
              type="submit"
              className="btn btn-success w-50"
              style={{ height: 40 }}
            >
              {isLoading ? (
                <ClipLoader loading={isLoading} color="white" size={18} />
              ) : (
                "Search"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <table className="table table-hover" style={{ width: "60%" }}>
          <thead>
            <tr>
              <th scope="col">Team</th>
              <th scope="col">Played</th>
              <th scope="col">Won</th>
              <th scope="col">Draw</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {teams.team} </td>
              <td> {teams.gamesPlayed} </td>
              <td> {teams.win} </td>
              <td> {teams.draw} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamStats;
