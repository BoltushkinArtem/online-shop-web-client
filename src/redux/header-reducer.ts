import { InferActionType, BaseThunkType } from "./store";
import { HeaderBannerType } from "../type/type";
import { HeaderAPI } from "../api/header-api";

let initialState = {
  id: undefined as undefined | number,
  banner: {
    id: undefined,
    title: "",
    backgroundColor: "",
  } as HeaderBannerType,
};

const headerReducer = (
  state = initialState,
  action: ActionType
): InitialState => {
  switch (action.type) {
    case "OS/HEADER/SET_HEADER_BANNER":
      return {
        ...state,
        banner: action.banner,
      };
    default:
      return state;
  }
};

export const action = {
  setBanner: (banner: HeaderBannerType) =>
    ({ type: "OS/HEADER/SET_HEADER_BANNER", banner } as const),
};

export const requestBanner = (): ThunkType => {
  return async (dispatch) => {
    let data = await HeaderAPI.getBanner();
    dispatch(action.setBanner(data.data.banner));
  };
};
export default headerReducer;

export type InitialState = typeof initialState;
type ActionType = InferActionType<typeof action>;
type ThunkType = BaseThunkType<ActionType>;
