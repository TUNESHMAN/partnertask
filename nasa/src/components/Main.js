import React from "react";
import { connect } from "react-redux";

function Main(props) {
  return (
    <div>
      <h2>Hello weather</h2>
    </div>
  );
}

// mapStateToProps function is the connection between our state from redux and the main component
const mapStateToProps = (state) => {
  return {
    // I return an object with each property from the initial state declared in the reducer
    isFetching: state.isFetching,
    error: state.error,
    weather: state.weather,
  };
};
// I wrap the export of the main component inside the connect call
export default connect(mapStateToProps, {})(Main);
