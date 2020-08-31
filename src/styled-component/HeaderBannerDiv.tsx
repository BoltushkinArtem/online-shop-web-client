import styled from "styled-components";

type HeaderBannerDivProps = {
  backgroundColor: string;
  backgroundImageURL: string;
};

export const HeaderBannerDiv = styled.div<HeaderBannerDivProps>`
  background-color: ${(props) => props.backgroundColor || "white"};
  background-image: url(${(props) => props.backgroundImageURL || ""});
  height: 70px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
`;
