import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import { con5 } from "../assets/images";

const DownloadBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #4a64f5;
  text-align: center;
`;
const Container = styled.div`
  width: 1152px;
  margin: 0 auto;
  padding-top: 80px;
  background-image: url(${con5});
  background-size: 100% 186px;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
`;
const Title = styled.h1`
  color: #fff;
  font-weight: 400;
  text-align: center;
  font-size: 1.85rem;
  margin-bottom: 35px;
`;

function Download() {
  return (
    <div>
      <DownloadBox className="depth6">
        <Container>
          <Title>새롭게 출시 된 로디언즈앱에서 모든서비스를 만나보세요!</Title>
          <Buttons />
        </Container>
      </DownloadBox>
    </div>
  );
}

export default Download;
