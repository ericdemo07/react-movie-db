import { Component, Fragment } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
import { fetchMovie, setSearchText } from "src/base/actions/CommonAction";
import { CommonActionType } from "../../actions/Types";

import { HeaderComponent } from "src/base/components/header/Header";
import { MovieComponent } from "src/base/components/movie/MovieComponent";
import "./MovieContainer.css";

import { Placeholder } from "semantic-ui-react";

interface IStateProps {
  movie: Movie;
  loading: boolean;
}

interface IDispatchProps {
  fetchMovie: () => void;
  setSearchText: (keyword: string) => void;
}

type Props = IStateProps & IDispatchProps;

class MovieContainer extends Component<Props> {
  public componentDidMount() {
    this.props.fetchMovie();
  }

  public renderMovie() {
    const { movie } = this.props;

    return <MovieComponent movie={movie} />;
  }

  public renderPlaceHolder() {
    return (
      <Placeholder>
        <Placeholder.Header image={true}>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }

  public render() {
    const { setSearchText, fetchMovie, loading } = this.props;

    return (
      <Fragment>
        <HeaderComponent
          header="React Redux Movie Database"
          subHeader="Courtesy: The Open Movie Database"
          setSearchText={setSearchText}
          fetchMovie={fetchMovie}
        />
        <div className="container">
          {loading ? this.renderPlaceHolder() : this.renderMovie()}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): IStateProps => {
  const { movie, loading } = state.movieState;

  return {
    movie,
    loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<CommonActionType>>) =>
  bindActionCreators({ fetchMovie, setSearchText }, dispatch);

export const MovieContainerWrapper = connect<IStateProps, {}, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
