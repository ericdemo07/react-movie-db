import { Component, Fragment } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
import { fetchMovies } from "src/base/actions/CommonAction";
import { CommonActionType } from "../../actions/Types";

import { HeaderComponent } from "src/base/components/header/Header";
import { MovieListingComponent } from "src/base/components/movies/MovieListingComponent";

interface IStateProps {
  movies: Movie[];
}

interface IDispatchProps {
  fetchMovies: () => void;
}

type Props = IStateProps & IDispatchProps;

class MovieContainer extends Component<Props> {
  public componentDidMount() {
    console.log("hello111");
    this.props.fetchMovies();
  }

  public render() {
    const { movies } = this.props;
    return (
      <Fragment>
        <HeaderComponent
          header="React Movie Database"
          subHeader="Sample application fetching from OMDB"
        />
        {movies.map((e, i) => (
          <div key={i}>{e.name}</div>
        ))}
        <MovieListingComponent movies={movies} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): IStateProps => {
  console.log("state", state);
  const { movies } = state.movie;

  return {
    movies
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<CommonActionType>>) =>
  bindActionCreators({ fetchMovies }, dispatch);

export const MovieContainerWrapper = connect<IStateProps, {}, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
