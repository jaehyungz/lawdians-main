import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { closeIcon } from "../assets/images";

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 799px) {
    position: fixed;
    top: 0;
    right: ${({ right }) => `${right}px`};
    width: 250px;
    height: 100vh;
    background: #fff;
    padding-top: 50px;
    display: inline-block;
    transition: all ease 0.5s;
  }
`;
const Close = styled.span`
  @media only screen and (max-width: 799px) {
    width: 18px;
    height: 18px;
    background-image: url(${closeIcon});
    background-size: contain;
    background-repeat: no-repeat;
    float: right;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
const MList = styled.ul`
  @media only screen and (max-width: 799px) {
    display: inline-block;
    width: 100%;
  }
`;
const Mitem = styled.a`
  @media only screen and (max-width: 799px) {
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    padding-left: 30px;
    margin: 15px 0;
    cursor: pointer;
    display: block;
  }
`;
const EventItem = styled(Link)`
  @media only screen and (max-width: 799px) {
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    padding-left: 30px;
    margin: 15px 0;
    cursor: pointer;
    display: block;
  }
`;

const Mask = styled.div`
  @media only screen and (max-width: 799px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }
`;

function MobileMenu({ visible, closeMMenu }) {
  const str = "안심병원123123";
  const hospitalText = str.substr(0, 4);
  const [right, setRight] = useState(visible ? 0 : -250);
  useEffect(() => {
    if (visible) {
      setRight(0);
    } else {
      setRight(-250);
    }
  }, [visible]);
  return (
    <div>
      {visible && <Mask onClick={closeMMenu} />}
      <Container right={right}>
        <Close onClick={closeMMenu} />
        <MList>
          <Mitem href="/#depth1" onClick={closeMMenu}>
            홈
          </Mitem>
          <Mitem href="/#depth2" onClick={closeMMenu}>
            {hospitalText}
          </Mitem>
          <Mitem href="/#depth3" onClick={closeMMenu}>
            안심의료서비스
          </Mitem>
          <Mitem href="/#depth4" onClick={closeMMenu}>
            안심변호사
          </Mitem>
          <Mitem href="/#depth5" onClick={closeMMenu}>
            제휴신청
          </Mitem>
          <Mitem href="/#depth6" onClick={closeMMenu}>
            다운로드
          </Mitem>
          <EventItem to="/event">이벤트</EventItem>
        </MList>
      </Container>
    </div>
  );
}

export default MobileMenu;
