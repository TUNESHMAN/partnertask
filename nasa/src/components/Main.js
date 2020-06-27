import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spin, Button } from "antd";
import { fetchPhoto } from "../state/actions/photoAction";

function Main(props) {
  console.log(props.isFetching);
  console.log(props.photo);

  // I use the useEffect hook to carry out component side effect
  useEffect(() => {
    props.fetchPhoto();
  }, []);
  return (
    <div>
      <Button>See today's weather info</Button>
      {props.isFetching ? (
        <div>
          <Spin size="large" spinning={props.isFetching} />
        </div>
      ) : props.photo.length === 0 ? (
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
    isFetching: state.photo.isFetching,
    error: state.photo.error,
    photo: state.photo.picture,
  };
};
// I wrap the export of the main component inside the connect call
export default connect(mapStateToProps, { fetchPhoto })(Main);
