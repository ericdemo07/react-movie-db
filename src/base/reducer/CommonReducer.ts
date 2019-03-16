import { CommonActionType, ICommonAction } from "../actions/Types";

const MOVIE_DEFAULT_STATE: MovieState = {
  name: ""
};

export const commonReducer = (
  state = MOVIE_DEFAULT_STATE,
  action: ICommonAction
): MovieState => {
  switch (action.type) {
    case CommonActionType.resetState:
      return MOVIE_DEFAULT_STATE;
    case CommonActionType.setMovieName:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};
