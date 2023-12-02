import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { API_BASE_URL } from "../BaseUrl";

function DisplayTenTeams() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const threshold = e.target.threshold.value;
    axios
      .post(`${API_BASE_URL}/football/team/get/thresholdwin`, {
        threshold,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        if (res.data.success) {
          setTeams(res.data.result);
        } else {
          setTeams([]);
        }
      });
  };

  const [isLoading, setIsLoading] = useState(false);

  const [teams, setTeams] = useState([]);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          className="row g-3 ms-5 mt-2"
          style={{ width: "55%" }}
          onSubmit={handleSearchSubmit}
        >
          <div className="col-6 w-50 ">
            <label htmlFor="threshold" className="form-label">
              Wins (threshold value)
            </label>
            <input
              type="text"
              className="form-control"
              id="threshold"
              required={true}
            />
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
                "Go"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <table className="table table-hover" style={{ width: "60%" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Played</th>
              <th scope="col">Won</th>
              <th scope="col">Draw</th>
              <th scope="col">Lost</th>
              <th scope="col">Goals for</th>
              <th scope="col">Goals against</th>
              <th scope="col">Points</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((ele, ind) => {
              return (
                <tr>
                  <th scope="row" key={ind}>
                    {" "}
                    {ind + 1}{" "}
                  </th>
                  <td> {ele.team} </td>
                  <td> {ele.gamesPlayed} </td>
                  <td> {ele.win} </td>
                  <td> {ele.draw} </td>
                  <td> {ele.loss} </td>
                  <td> {ele.goalsFor} </td>
                  <td> {ele.goalsAgainst} </td>
                  <td> {ele.points} </td>
                  <td> {ele.year} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayTenTeams;
