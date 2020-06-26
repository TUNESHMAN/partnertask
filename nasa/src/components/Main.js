import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

function Main(props) {
  return (
    <div>
      <button>See today's weather info</button>
      {props.isFetching ? (
        <div>
          <Spin size="large" spinning={props.isFetching} />
        </div>
      ) : props.weather.length === 0 ? (
        <div>
          <h2>There is no weather information to display</h2>
        </div>
      ) : (
        <div>
          <h1>Yeeeeee!</h1>
        </div>
      )}
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
