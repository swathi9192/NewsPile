import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";
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
                {!this.props.isSignedIn ? <Redirect to="/login" /> : <Home />}
              </Route>

              <Route path="/home" exact component={Home}>
                {!this.props.isSignedIn ? <Redirect to="/login" /> : <Home />}
              </Route>

              <Route path="/login" exact>
                {this.props.isSignedIn ? <Redirect to="/home" /> : <Login />}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(App);
