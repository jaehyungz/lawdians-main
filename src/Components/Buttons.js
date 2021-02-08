import React from "react";
import styled from "styled-components";
import { appstore, googleplay } from "../assets/images";

const Container = styled.div``;
const Button = styled.button`
  width: 200px;
  height: 60px;
  line-height: 70px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 800;
  font-size: 18px;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  margin-right: ${(props) => props.right};
  margin-left: ${(props) => props.left};
  @media only screen and (max-width: 500px) {
    width: 40%;
    height: 50px;
    line-height: 50px;
  }
`;
const I = styled.i`
  background: url(${(props) => props.bg});
  width: ${(props) => (props.width ? props.width + "px" : "142px")};
  height: ${(props) => (props.height ? props.height + "px" : "27px")};
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  @media only screen and (max-width: 500px) {
    width: 70%;
    height: 100%;
    background-size: contain;
    background-position: center center;
  }
`;
function Buttons(match) {
  const platform = navigator.platform;
  const buttonLink = (url) => {
    window.open(url);
  };
  const platformCheck = () => {
    if (platform !== "MacIntel") {
      alert("윈도우 버전이 아닙니다.");
    }
  };

  return (
    <Container>
      <Button
        right={"5px"}
        onClick={() => {
          platform !== "MacIntel"
            ? platformCheck()
            : buttonLink(
                "itms-apps://itunes.apple.com/kr/app/apple-store/1546796443"
              );
        }}
      >
        <I bg={appstore} width={123} height={30}></I>
      </Button>
      <Button
        left={"5px"}
        onClick={() => {
          buttonLink(
            "https://play.google.com/store/apps/details?id=com.app.lawdians"
          );
        }}
      >
        <I bg={googleplay}></I>
      </Button>
    </Container>
  );
}

export default Buttons;
