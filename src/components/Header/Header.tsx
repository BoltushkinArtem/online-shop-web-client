import React, { FC, useEffect } from "react";
import { HeaderBanner } from "./HeaderBanner";
import { useSelector, useDispatch } from "react-redux";
import { getBanner } from "../../redux/header-selector";
import { requestBanner } from "../../redux/header-reducer";

export const Header: FC = () => {
  const banner = useSelector(getBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestBanner());
  }, [requestBanner]);

  return (
    <>
      <HeaderBanner id={banner.id} backgroundColor={banner.backgroundColor} />
    </>
  );
};
