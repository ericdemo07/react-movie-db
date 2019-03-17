import { CommonActionType, ICommonAction } from "../actions/Types";

const MOVIE_DEFAULT_STATE: MovieState = {
  movies: [{ name: "" }],
  name: ""
};

export const movie = (
  state = MOVIE_DEFAULT_STATE,
  action: ICommonAction
): MovieState => {
  console.log(action, state);

  switch (action.type) {
    case CommonActionType.resetState:
      return MOVIE_DEFAULT_STATE;
    case CommonActionType.setMovies:
      return { ...state, movies: action.payload.movies };
    case CommonActionType.setMovieName:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};
