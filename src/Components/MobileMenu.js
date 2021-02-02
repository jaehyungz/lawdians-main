import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { closeIcon } from "../assets/images";

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 650px) {
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
  @media only screen and (max-width: 650px) {
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
  @media only screen and (max-width: 650px) {
    display: inline-block;
    width: 100%;
  }
`;
const Mitem = styled.li`
  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    padding-left: 30px;
    margin: 15px 0;
    cursor: pointer;
  }
`;

const Mask = styled.div`
  @media only screen and (max-width: 650px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }
`;

function MobileMenu({
  visible,
  closeMMenu,
  Depth1_move,
  Depth2_move,
  Depth3_move,
  Depth4_move,
  Depth5_move,
  Depth6_move,
}) {
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
          <Mitem onClick={Depth1_move}>홈</Mitem>
          <Mitem onClick={Depth2_move}>안심병원</Mitem>
          <Mitem onClick={Depth3_move}>안심의료서비스</Mitem>
          <Mitem onClick={Depth4_move}>안심변호사</Mitem>
          <Mitem onClick={Depth5_move}>제휴신청</Mitem>
          <Mitem onClick={Depth6_move}>다운로드</Mitem>
        </MList>
      </Container>
    </div>
  );
}

export default MobileMenu;
