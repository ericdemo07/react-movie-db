import * as React from "react";
import { Component, Fragment } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { MoviesListingContainer } from "./base/containers/movies/MovieListingContainer";

// import logo from "./logo.svg";

class App extends Component {
  public render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      // </div>
      <Router basename="/ble">
        <Fragment>
          <Route exact={true} path="/" component={MoviesListingContainer} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
