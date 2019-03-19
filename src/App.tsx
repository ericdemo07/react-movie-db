import * as React from "react";
import { Component, Fragment } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { MovieContainerWrapper } from "./base/containers/movie/MovieContainer";

// import logo from "./logo.svg";

class App extends Component {
  public render() {
    return (
      <Router basename="/rmdb">
        <Fragment>
          <Route exact={true} path="/" component={MovieContainerWrapper} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
