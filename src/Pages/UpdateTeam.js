import axios from "axios";
import React, { useState } from "react";
import Alert from "../Components/Alert";
import { ClipLoader } from "react-spinners";

function UpdateTeam() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const teamName = e.target.team.value;
    axios
      .get(`http://localhost:5000/football/team/get/${teamName}`)
      .then((res) => {
        setIsLoading(false);
        if (res.data.success) {
          setTeams(res.data.result);
        }
      })
      .catch((res) => {
        showAlert("danger");
      });
  };

  const showAlert = (type) => {
    setAlertType(type);
    if (type === "success") {
      setMessage("Team updated successfully");
    } else {
      setMessage("Something went wrong");
    }
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");

  const [team, setTeam] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState("");
  const [win, setWin] = useState("");
  const [draw, setDraw] = useState("");
  const [loss, setLoss] = useState("");
  const [goalsFor, setGoalsFor] = useState("");
  const [goalsAgainst, setGoalsAgainst] = useState("");
  const [points, setPoints] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");

  const [teams, setTeams] = useState([]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({
      team,
      gamesPlayed,
      win,
      loss,
      draw,
      goalsAgainst,
      goalsFor,
      points,
      year,
    });
    axios
      .post(`http://localhost:5000/football/team/update/${id}`, {
        team,
        gamesPlayed,
        win,
        loss,
        draw,
        goalsAgainst,
        goalsFor,
        points,
        year,
      })
      .then((res) => {
        setIsLoading(false);
        if (res.data.success) {
          showAlert("success");
          axios
            .get(`http://localhost:5000/football/team/get/${team}`)
            .then((res) => {
              setIsLoading(false);
              if (res.data.success) {
                setTeams(res.data.result);
              }
            });
        } else {
          showAlert("danger");
        }
      })
      .catch((err) => {
        showAlert("danger");
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update team
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/*-----------------------------------------------------------------------------------------------------*/}
            {/*-----------------------------------------------------------------------------------------------------*/}
            {/*-----------------------------------------------------------------------------------------------------*/}
            <div className="modal-body">
              {isVisible && (
                <Alert
                  isVisible={isVisible}
                  type={alertType}
                  message={message}
                />
              )}
              <div className="d-flex justify-content-center">
                <h3>Update Team</h3>
              </div>
              <div className="d-flex justify-content-center">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="team" className="form-label">
                      Team name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="team"
                      value={team}
                      disabled={true}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="gamesPlayed" className="form-label">
                      Games played
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="gamesPlayed"
                      value={gamesPlayed}
                      onChange={(e) => setGamesPlayed(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="win" className="form-label">
                      Wins
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="win"
                      value={win}
                      onChange={(e) => setWin(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="loss" className="form-label">
                      Losses
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="loss"
                      value={loss}
                      onChange={(e) => setLoss(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="draw" className="form-label">
                      Draws
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="draw"
                      value={draw}
                      onChange={(e) => setDraw(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="goalsFor" className="form-label">
                      Goals for
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="goalsFor"
                      value={goalsFor}
                      onChange={(e) => setGoalsFor(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="goalsAgainst" className="form-label">
                      Goals against
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="goalsAgainst"
                      value={goalsAgainst}
                      onChange={(e) => setGoalsAgainst(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="points" className="form-label">
                      Points
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="points"
                      value={points}
                      onChange={(e) => setPoints(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="year" className="form-label">
                      Year
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="year"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    />
                  </div>
                </form>
              </div>
            </div>
            {/*-----------------------------------------------------------------------------------------------------*/}
            {/*-----------------------------------------------------------------------------------------------------*/}
            {/*-----------------------------------------------------------------------------------------------------*/}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleUpdateSubmit}
              >
                {isLoading ? (
                  <ClipLoader loading={isLoading} color="white" size={18} />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <form
          className="row g-3 ms-5 mt-2"
          style={{ width: "55%" }}
          onSubmit={handleSearchSubmit}
        >
          <div className="col-6 w-75 ">
            <label htmlFor="team" className="form-label">
              Search team
            </label>
            <input type="text" className="form-control" id="team" />
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
              <th scope="col">Update</th>
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
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => {
                        setTeam(ele.team);
                        setGamesPlayed(ele.gamesPlayed);
                        setWin(ele.win);
                        setDraw(ele.draw);
                        setLoss(ele.loss);
                        setGoalsFor(ele.goalsFor);
                        setGoalsAgainst(ele.goalsAgainst);
                        setPoints(ele.points);
                        setYear(ele.year);
                        setId(ele._id);
                      }}
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpdateTeam;
