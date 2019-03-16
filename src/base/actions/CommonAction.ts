import { apifetchMovies } from "../services/CommonService";

import {
  CommonActionCreator,
  CommonActionType,
  CommonAsyncActionCreator
} from "./Types";

export const fetchMovies = (): CommonAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const movies: Movie[] = await apifetchMovies();
  dispatch(setMovies(movies));
};

export const setMovies: CommonActionCreator = (movies: Movie[]) => ({
  payload: {
    movies
  },
  type: CommonActionType.setMovieName
});
