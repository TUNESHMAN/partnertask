import React from "React";
import { Main } from "./Main";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom"; // The Memory Router keeps the history of our URL in memory. Cannot use NavLink outside a router

// beforeEach and afterEach runs arbitrary code before each and after each test

// Take care of cleaning up after every operation
afterEach(rtl.cleanup);

const fetchPhoto = jest.fn();

const mockPhoto = {
  isFetching: false,
  error: "",
  picture: {
    copyright: "Petr Horalek",
    date: "2020-07-16",
    explanation:
      "This Comet NEOWISE (C/2020 F3) now sweeps through our fair planet's northern skies. Its long tails stretch across this deep skyview from Suchy Vrch, Czech Republic. Recorded on the night of July 13/14, the composite of untracked foreground and tracked and filtered sky exposures teases out details in the comet's tail not visible to the unaided eye. Faint structures extend to the top of the frame, over 20 degrees from the comet's bright coma. Pushed out by the pressure of sunlight itself, the broad curve of the comet's yellowish dust tail is easy to see by eye. But the fainter, more bluish tail is separate from the reflective comet dust. The fainter tail is an ion tail, formed as ions from the cometary coma are dragged outward by magnetic fields in the solar wind and fluoresce in the sunlight. Outbound NEOWISE is climbing higher in northern evening skies, coming closest to Earth on July 23rd.   Notable Images of Comet NEOWISE Submitted to APOD:  || July 15 || July 14  || July 13  || July 12  || July 11  || July 10 & earlier ||",
    hdurl:
      "https://apod.nasa.gov/apod/image/2007/2020_07_14_NEOWISE_Suchy_Vrch_1500px.png",
    media_type: "image",
    service_version: "v1",
    title: "The Long Tails of Comet NEOWISE",
    url:
      "https://apod.nasa.gov/apod/image/2007/2020_07_14_NEOWISE_Suchy_Vrch_1263px.jpg",
  },
  favorite: [],
};

// Handle repetitive operations inside a beforeEach function
let wrapper;
beforeEach(() => {
  // The aim is to recreate the "wrapper" at every test
  wrapper = rtl.render(
    <Router>
      <Main isFetching={false} photo={mockPhoto} fetchPhoto={fetchPhoto} />
    </Router>
  );
});
// Make a trivial test
it("renders without crashing", () => {
  //   wrapper.debug(); //This is like console.log. It gives a look into the fake Dom that is created
  expect(wrapper.container).toMatchSnapshot(); //With a snapshot, we can ensure changes to the output of a component never goes unnoticed.
});

it('renders a "Previous" text node', () => {
  expect(wrapper.getByTestId("previous")).toBeInTheDocument();
  expect(wrapper.getByTestId("previous")).toBeVisible();
});

it('renders a "Next" text node', () => {
  expect(wrapper.getByTestId("next")).toBeInTheDocument();
  expect(wrapper.getByTestId("next")).toBeVisible();
});

it('renders a "View Favorite" text node', () => {
  expect(wrapper.getByTestId("viewFav")).toBeInTheDocument();
  expect(wrapper.getByTestId("viewFav")).toBeVisible();
});
