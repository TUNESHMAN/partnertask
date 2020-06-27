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
    .get("https://api.nasa.gov/planetary/apod?api_key=U8fI0KD04W8rVLSSvIuey7l15F6OCvFc7f5Zlc5N")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PHOTO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_PHOTO_FAIL, payload: err });
    });
};
