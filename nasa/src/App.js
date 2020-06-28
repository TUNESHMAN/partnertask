import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/favorites" component={Favorites} />
    </div>
  );
}

export default App;
