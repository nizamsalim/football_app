import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Alert from "../Components/Alert";
import { API_BASE_URL } from "../BaseUrl";

function AddTeam() {
  const clearForm = (e) => {
    e.target.team.value = "";
    e.target.gamesPlayed.value = "";
    e.target.win.value = "";
    e.target.draw.value = "";
    e.target.loss.value = "";
    e.target.goalsFor.value = "";
    e.target.goalsAgainst.value = "";
    e.target.points.value = "";
    e.target.year.value = "";
  };
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      team: e.target.team.value,
      gamesPlayed: Number(e.target.gamesPlayed.value),
      win: Number(e.target.win.value),
      draw: Number(e.target.draw.value),
      loss: Number(e.target.loss.value),
      goalsFor: Number(e.target.goalsFor.value),
      goalsAgainst: Number(e.target.goalsAgainst.value),
      points: Number(e.target.points.value),
      year: Number(e.target.year.value),
    };
    axios
      .post(`${API_BASE_URL}/football/add`, data)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        if (res.data.success) {
          showAlert("success", e);
        } else {
          showAlert("danger");
        }
      })
      .catch((err) => {
        console.log(err);
        showAlert("danger");
      });
  }

  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");

  const showAlert = (type, e) => {
    setAlertType(type);
    if (type === "success") {
      setMessage("Team added successfully");
    } else {
      setMessage("Something went wrong");
    }
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      clearForm(e);
    }, 3000);
  };

  return (
    <div>
      <Alert isVisible={isVisible} type={alertType} message={message} />
      <div className="d-flex justify-content-center mt-3">
        <h3>Add Team</h3>
      </div>
      <div className="d-flex justify-content-center">
        <form
          className="row g-3 ms-5"
          style={{ width: "55%" }}
          onSubmit={handleSubmit}
        >
          <div className="col-12">
            <label htmlFor="team" className="form-label">
              Team name
            </label>
            <input type="text" className="form-control" id="team" />
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
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="win" className="form-label">
              Wins
            </label>
            <input type="number" min={0} className="form-control" id="win" />
          </div>
          <div className="col-md-3">
            <label htmlFor="loss" className="form-label">
              Losses
            </label>
            <input type="number" min={0} className="form-control" id="loss" />
          </div>
          <div className="col-md-3">
            <label htmlFor="draw" className="form-label">
              Draws
            </label>
            <input type="number" min={0} className="form-control" id="draw" />
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
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="points" className="form-label">
              Points
            </label>
            <input type="number" min={0} className="form-control" id="points" />
          </div>
          <div className="col-md-3">
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <input type="number" className="form-control" id="year" />
          </div>

          <div className="col-12 d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-success w-25">
              {isLoading ? (
                <ClipLoader loading={isLoading} color="white" size={18} />
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeam;
