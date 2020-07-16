import React from "react";
import "./App.css";
import Main from "./components/Main";
// import { Route } from "react-router-dom";
import Board from "./components/Board";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/favorites" component={Board} />
      </div>
    </Router>
  );
}

export default App;
