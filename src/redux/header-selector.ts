import { AppStateType } from "./store";
export const getBanner = (state: AppStateType) => {
  return state.header.banner;
};
