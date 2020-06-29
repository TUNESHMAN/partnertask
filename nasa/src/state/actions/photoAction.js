// import the type of action to be performed
import {
  GET_PHOTO_START,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from "../types/types";
import axios from "axios";
import ErrorModal from "../../components/ErrorModal";

export const fetchPhoto = (date) => (dispatch) => {
  dispatch({ type: GET_PHOTO_START });
  //  Make a call to the API
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=U8fI0KD04W8rVLSSvIuey7l15F6OCvFc7f5Zlc5N&date=${date}`
    )
    .then((res) => {
      const potd = res.data;

      dispatch({ type: GET_PHOTO_SUCCESS, payload: potd });
      let serialized_object = JSON.stringify(potd);
      localStorage.setItem("potd", serialized_object);
      let deserialized_object = JSON.parse(localStorage.getItem("potd"));
    })
    .catch((err) => {
      dispatch({ type: GET_PHOTO_FAIL, payload: err });
      ErrorModal();
    });
};
