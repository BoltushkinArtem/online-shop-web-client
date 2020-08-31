import { instance, APIResponseType } from "./api";
import { HeaderBannerType } from "../type/type";

type BannerResponseDataType = HeaderBannerType;

type HeaderResponseDataType = {
  id: number;
  banner: BannerResponseDataType;
};

export const HeaderAPI = {
  getBanner() {
    return instance
      .get<APIResponseType<HeaderResponseDataType>>("api/header/active")
      .then((res) => res.data);
  },
};
