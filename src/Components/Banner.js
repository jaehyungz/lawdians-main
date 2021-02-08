import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { bannerbg, main_banner_m } from "../assets/images";
import Buttons from "./Buttons";
import useResizeHandler from "../hooks/useResizeHandler";
const Banner_Container = styled.div`
  height: 840px;
  background-image: url(${bannerbg});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media only screen and (max-width: 500px) {
    background-image: url(${main_banner_m});
  }
`;

const Container = styled.div`
  width: 1152px;
  margin: 0 auto;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
  @media only screen and (max-width: 650px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  line-height: 66px;
  letter-spacing: -0.9px;
  color: #fff;
  display: inline-block;
  margin: 302px 0 10px 0;
  @media only screen and (max-width: 650px) {
    font-size: 2rem;
    height: unset;
    line-height: unset;
    margin: 180px 0 10px 0;
  }
`;

const Description = styled.p`
  width: 314px;
  font-size: 1.25rem;
  height: 58px;
  line-height: 29px;
  letter-spacing: -1px;
  color: #fff;
  margin-bottom: 40px;
  @media only screen and (max-width: 650px) {
    font-size: 1rem;
    width: unset;
    line-height: unset;
    word-break: keep-all;
  }
`;

function Banner() {
  const { platform } = useResizeHandler();
  return (
    <Banner_Container id="depth1">
      <Container>
        {platform === "desktop" ? (
          <Title>SAFE YOUR BEAUTY</Title>
        ) : (
          <Title>SAFE YOUR BEAUTY</Title>
        )}
        {platform === "desktop" ? (
          <Description>
            수술 후 까지 지켜드리는 로디언즈와 함께 안심하고 건강해지세요!
          </Description>
        ) : (
          <Description>
            수술 후 까지 지켜드리는
            <br /> 로디언즈와 함께 안심하고 건강해지세요!
          </Description>
        )}

        <Buttons />
      </Container>
    </Banner_Container>
  );
}

export default Banner;
