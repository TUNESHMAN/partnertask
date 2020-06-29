import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/favorites" component={Board} />
    </div>
  );
}

export default App;
