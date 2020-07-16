import React from "React";
import Main from "./Main";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../state/store";

// Take care of cleaning up after every operation
afterEach(rtl.cleanup);

// Handle repetitive operations inside a beforeEach function
let wrapper;
beforeEach(() => {
  // The aim is to recreate the "wrapper" at every test
  wrapper = rtl.render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
});
// Make a trivial test
it("renders without crashing", () => {
  wrapper.debug(); //This is like console.log. It gives a look into the fake Dom that is created
  expect(wrapper.container).toMatchSnapshot();
});
