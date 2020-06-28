// Import the types
import {
  GET_PHOTO_START,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from "../types/types";

// Set the initial state to an empty object
const initialState = {
  isFetching: false,
  error: "",
  picture: [],
};

// The reducer takes in initial state and the action as arguments
const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        picture: [...state.picture, action.payload],
      };
    case GET_PHOTO_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default photoReducer;

// const state = {
//   pictures: {
//     '2020-06-26': {},
//     '2020-06-27': {}
//   },
//   currentPicture: {}
// }
