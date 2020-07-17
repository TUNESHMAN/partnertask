import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Spin, Button, DatePicker } from "antd";
import { fetchPhoto } from "../state/actions/photoAction";
import moment from "moment";
import "../App.css";
import { NavLink } from "react-router-dom";
import StatusModal from "./StatusModal";

export function Main(props) {
  const dateFormat = "YYYY/MM/DD";
  // setDate()--> sets the day as a number (1-31)
  // getDate()--> gets the day as a number (1-31)
  // toLocaleDateString("fr-CA") --> gives the date in the format YYYY-MM-DD
  const today = new Date().toLocaleDateString("fr-CA");
  const [chosen_Date, setChosen_Date] = useState(today);
  // Favorites
  const [favorites, setFavorites] = useState(
    // In the event that the value of favoriteList does evaluate quickly, the empty array is  a fallback value.
    JSON.parse(localStorage.getItem("favoriteList")) || []
  );

  const handleDate = (value) => {
    setChosen_Date(value._d.toLocaleDateString("fr-CA"));
    // Passes today's date by default to the URL or the date from the date picker
    props.fetchPhoto(chosen_Date);
  };

  // This function controls the previous button
  const previous = (date) => {
    var d = new Date(chosen_Date);
    const yesterday = new Date(d.setDate(d.getDate() - 1)).toLocaleDateString(
      "fr-CA"
    );
    setChosen_Date(yesterday);
    // Passes yesterday's date to the URL as a parameter
    props.fetchPhoto(yesterday);
  };

  // This function controls the next button
  const next = (date) => {
    var d = new Date(chosen_Date);
    const tomorrow = new Date(d.setDate(d.getDate() + 1)).toLocaleDateString(
      "fr-CA"
    );
    setChosen_Date(tomorrow);
    // Passes tomorrow's date to the URL as a parameter
    props.fetchPhoto(tomorrow);
  };

  // I use the useEffect hook to carry out component side effect
  useEffect(() => {
    // Immediately it mounts , we want to have the photo for that day and local storage with key favoriteList and value favorites
    // UseEffect takes in an optional dependency array. In this case, useEffect calls itself  when chosen_Date and favorites changes
    props.fetchPhoto(chosen_Date);
    localStorage.setItem("favoriteList", JSON.stringify(favorites)); //In localStorage, we can only store data as a string
  }, [chosen_Date, favorites]);

  const handleFavorites = (fav) => {
    // Find checks for the presence of a particular item in an array, if it finds it, it returns it.
    const userFavorites = favorites.find((favs) => favs.date === fav.date);
    if (userFavorites) {
      StatusModal(
        "Add favorites error",
        "image already exist in favorites list"
      );
    } else {
      setFavorites([...favorites, fav]);
      StatusModal(
        "Add favorites success",
        "image added to favorites list",
        "success"
      );
    }
  };

  return (
    <div className="body" data-testid="container">
      {props.isFetching ? (
        <div className="spinner">
          <Spin size="large" spinning={props.isFetching} />
        </div>
      ) : Object.keys(props.photo).length === 0 ? (
        <div className="error-div">
          <h2 className="error-text">No photo to display</h2>
        </div>
      ) : (
        <div>
          <div className="container">
            <h1>Photo of the day for {props.photo.date}</h1>
            <header>
              <h2>
                <span>Title:</span> {props.photo.title}
              </h2>
            </header>

            <div className="image-div">
              <img
                src={props.photo.hdurl}
                alt="photo of the day"
                style={{ width: "100%" }}
              />
              <div className="description-holder">
                <p>{props.photo.explanation}</p>
              </div>
            </div>
            <div className="btn">
              <Button
                data-testid="previous"
                className="btn-btn"
                onClick={previous}
              >
                Previous
              </Button>
              <Button className="btn-btn" onClick={next} data-testid="next">
                Next
              </Button>
              <DatePicker
                name="chosen_Date"
                setFieldsValue={moment(chosen_Date, dateFormat)}
                format={dateFormat}
                onChange={handleDate}
                placeholder="Date"
                className="btn-btn"
              />
              <Button
                className="btn-btn1"
                onClick={() => handleFavorites(props.photo)}
              >
                Set as Favorite
              </Button>
              <NavLink to="/favorites">
                <Button className="btn-btn1" data-testid="viewFav">
                  View Favorite
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// mapStateToProps function is the connection between our state from redux and the main component
const mapStateToProps = (state) => {
  return {
    // I return an object with each property from the initial state declared in the reducer
    isFetching: state.photo.isFetching,
    error: state.photo.error,
    photo: state.photo.picture,
  };
};
// I wrap the export of the main component inside the connect call
export default connect(mapStateToProps, { fetchPhoto })(Main);
