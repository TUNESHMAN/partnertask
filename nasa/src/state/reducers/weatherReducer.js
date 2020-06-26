// Import the types
import { GET_WEATHER } from "../types/types";

// Set the initial state to an empty object
const initialState = {
  isFetching: false,
  error: "",
  weather: [],
};

// The reducer takes in initial state and the action as arguments
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            
            break;
    
        default:
            return state;
    }
};

export default weatherReducer;