import { apifetchMovies } from "../services/CommonService";

import {
  CommonActionCreator,
  CommonActionType,
  CommonAsyncActionCreator
} from "./Types";

export const fetchMovie = (): CommonAsyncActionCreator => async (
  dispatch,
  getState
) => {
  const state = getState();
  const searchKeyWord = state.movieState.searchKeyWord;
  try {
    dispatch(setLoading(true));
    const movie: Movie = await apifetchMovies({ searchKeyWord });
    dispatch(setMovie(movie));
  } catch {
    // TBD
  } finally {
    dispatch(setLoading(false));
  }
};

const setMovie: CommonActionCreator = (movie: Movie) => ({
  payload: {
    movie
  },
  type: CommonActionType.setMovie
});

export const setSearchText: CommonActionCreator = (keyword: string) => ({
  payload: {
    keyword
  },
  type: CommonActionType.setSearchText
});

export const setLoading: CommonActionCreator = (loading: boolean) => ({
  payload: {
    loading
  },
  type: CommonActionType.setLoading
});
