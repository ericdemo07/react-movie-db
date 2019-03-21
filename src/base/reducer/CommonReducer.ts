import { CommonActionType, ICommonAction } from "../actions/Types";

const MOVIE_DEFAULT_STATE: MovieState = {
  movie: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [{ Source: "", Value: "" }],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
  },
  loading: false,
  searchKeyWord: "The"
};

export const movieState = (
  state = MOVIE_DEFAULT_STATE,
  action: ICommonAction
): MovieState => {

  switch (action.type) {
    case CommonActionType.resetState:
      return MOVIE_DEFAULT_STATE;
    case CommonActionType.setMovie:
      return { ...state, movie: action.payload.movie };
    case CommonActionType.setSearchText:
      return { ...state, searchKeyWord: action.payload.keyword };
    case CommonActionType.setLoading:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};
