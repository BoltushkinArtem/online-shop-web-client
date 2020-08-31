import React, { FC } from "react";
import { HeaderBannerType } from "../../type/type";
import { HeaderBannerDiv } from "../../styled-component/HeaderBannerDiv";

export const HeaderBanner: FC<HeaderBannerType> = ({ id, backgroundColor }) => {
  return (
    <>
      {id !== undefined ? (
        <HeaderBannerDiv
          backgroundColor={backgroundColor}
          backgroundImageURL={"http://localhost:5001/api/header/image/" + id}
        ></HeaderBannerDiv>
      ) : null}
    </>
  );
};
