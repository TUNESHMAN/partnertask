// import the type of action to be performed
import {
  GET_PHOTO_START,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from "../types/types";
import axios from "axios";

export const fetchPhoto = () => (dispatch) => {
  dispatch({ type: GET_PHOTO_START });
  //  Make a call to the API
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_PHOTO_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_PHOTO_FAIL, payload: err });
    });
};
