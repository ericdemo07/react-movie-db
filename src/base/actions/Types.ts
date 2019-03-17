import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export enum CommonActionType {
  resetState,
  setMovieName,
  setMovieImage,
  setMovies,
}

export interface ICommonAction extends Action<CommonActionType> {
  payload: {
    [key: string]: any;
  };
}

export type CommonActionCreator = ActionCreator<ICommonAction>;

export type CommonAsyncActionCreator = ThunkAction<
  void,
  AppState,
  void,
  ICommonAction
>;
