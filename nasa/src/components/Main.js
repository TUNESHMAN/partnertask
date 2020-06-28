import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spin, Button } from "antd";
import { fetchPhoto } from "../state/actions/photoAction";
import "../App.css";

function Main(props) {
  // This function controls the previous button

  const previous = (date) => {
    var d = new Date();
    const yesterday = new Date(d.setDate(d.getDate() - 1)).toLocaleDateString(
      "fr-CA"
    );
    props.fetchPhoto(yesterday);
  };

  // This function controls the next button
  const next = (date) => {
    var d = new Date();
    const tomorrow = new Date(d.setDate(d.getDate() + 1)).toLocaleDateString(
      "fr-CA"
    );
    props.fetchPhoto(tomorrow);
  };

  // I use the useEffect hook to carry out component side effect
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    props.fetchPhoto(today);
  }, []);

  return (
    <div>
      {props.isFetching ? (
        <div>
          <Spin size="large" spinning={props.isFetching} />
        </div>
      ) : props.photo.length === 0 ? (
        <div>
          <h2>No photo to display</h2>
        </div>
      ) : (
        <div>
          {props.photo.map((view) => (
            <div className="container">
              <h1>Photo of the day for {view.date}</h1>
              <header>
                <h2>
                  <span>Title:</span> {view.title}
                </h2>
              </header>
              <section>
                <div className="image-div">
                  <img
                    src={view.hdurl}
                    alt="photo of the day"
                    style={{ width: "100%" }}
                  />
                  <div className="description-holder">
                    <p>{view.explanation}</p>
                  </div>
                </div>
                <Button onClick={previous}>Previous</Button>
                <Button onClick={next}>Next</Button>
                <Button>Set as Favorite</Button>
              </section>
            </div>
          ))}
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
