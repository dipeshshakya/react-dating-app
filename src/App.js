import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route path="/">
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
