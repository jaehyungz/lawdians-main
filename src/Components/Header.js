import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobilemenu, sMobilemenu } from "../assets/images";
import MobileMenu from "./MobileMenu";

const Headerbox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
  background-color ${(props) => props.color};
  border-bottom: 1px solid rgba(220, 220, 220, 0.14);
  transition: all ease 0.3s;
  @media only screen and (max-width: 650px) {
  }
  
`;

const HeaderContainer = styled.div`
  width: 1152px;
  margin: 0 auto;
  height: 80px;
  @media only screen and (max-width: 1152px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const List = styled.ul`
  float: right;
  margin: 27px 0 26px 0;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const Item = styled.li`
  color ${(props) => props.color};
  font-size: 1.125rem;
  float: left;
  height: 27px;
  line-height: 27px;
  letter-spacing: -0.9px;
  margin-left: 60px;
  cursor: pointer;
  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    margin-left: 6vw;
  }
`;
const MMenu = styled.span`
  @media only screen and (max-width: 650px) {
    width: 24px;
    height: 24px;
    float: right;
    background: url(${mobilemenu});
    background: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

function Header() {
  const [show, handleShow] = useState(false);
  const header = document.querySelector("header");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  const [showmenu, setShowmenu] = useState(false);

  const openMMenu = () => {
    setShowmenu(true);
  };
  const closeMMenu = () => {
    setShowmenu(false);
  };
  const Depth1_move = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setShowmenu(false);
  };
  const Depth2_move = () => {
    const headerHeight = header.offsetHeight;
    const depth2 = document.querySelector(".depth2");
    const depthY = depth2.offsetTop - headerHeight;
    setShowmenu(false);
    window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth3_move = () => {
    const headerHeight = header.offsetHeight;
    const depth3 = document.querySelector(".depth3");
    const depthY = depth3.offsetTop - headerHeight;
    setShowmenu(false);
    window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth4_move = () => {
    const headerHeight = header.offsetHeight;
    const depth4 = document.querySelector(".depth4");
    const depthY = depth4.offsetTop - headerHeight;
    setShowmenu(false);
    window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth5_move = () => {
    const headerHeight = header.offsetHeight;
    const depth5 = document.querySelector(".depth5");
    const depthY = depth5.offsetTop - headerHeight;
    setShowmenu(false);
    window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth6_move = () => {
    const headerHeight = header.offsetHeight;
    const depth6 = document.querySelector(".depth6");
    const depthY = depth6.offsetTop - headerHeight;
    setShowmenu(false);
    window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  return (
    <Headerbox color={show ? "#fff" : "transparent"}>
      <HeaderContainer>
        <List>
          <Item color={show ? "#000" : "#fff"} onClick={Depth1_move}>
            홈
          </Item>
          <Item color={show ? "#000" : "#fff"} onClick={Depth2_move}>
            안심병원
          </Item>
          <Item color={show ? "#000" : "#fff"} onClick={Depth3_move}>
            안심의료서비스
          </Item>
          <Item color={show ? "#000" : "#fff"} onClick={Depth4_move}>
            안심변호사
          </Item>
          <Item color={show ? "#000" : "#fff"} onClick={Depth5_move}>
            제휴신청
          </Item>
          <Item color={show ? "#000" : "#fff"} onClick={Depth6_move}>
            다운로드
          </Item>
        </List>
        <MMenu src={show ? sMobilemenu : mobilemenu} onClick={openMMenu} />
      </HeaderContainer>
      <MobileMenu
        visible={showmenu}
        closeMMenu={closeMMenu}
        Depth1_move={Depth1_move}
        Depth2_move={Depth2_move}
        Depth3_move={Depth3_move}
        Depth4_move={Depth4_move}
        Depth5_move={Depth5_move}
        Depth6_move={Depth6_move}
      />
    </Headerbox>
  );
}

export default Header;
