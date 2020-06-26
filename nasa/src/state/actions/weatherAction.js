// import the type of action to be performed
import { GET_WEATHER_START } from "../types/types";
import axios from "axios";

export const fetchWeather = () => (dispatch) => {
  dispatch({ type: GET_WEATHER_START });
  //  Make a call to the API
  axios
    .get(
      "https: //api.nasa.gov/insight_weather/?U8fI0KD04W8rVLSSvIuey7l15F6OCvFc7f5Zlc5N&feedtype=json&ver=1.0"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
