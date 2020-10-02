import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import "./App.sass";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid ">
          <div className="mainContainer">
            <NavBar></NavBar>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
