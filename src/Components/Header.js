import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobilemenu, sMobilemenu, logoTop, logoScroll } from "../assets/images";
import MobileMenu from "./MobileMenu";
import GlobalStyles from "../Components/GlobalStyles";

const Headerbox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index:10;
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
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
  @media only screen and (max-width: 799px) {
    justify-content: space-between;
  }
`;
const Logo = styled.a`
  width: 162px;
  height: 25px;
  cursor: pointer;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const List = styled.ul`
  margin-left: auto;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Item = styled.a`
  color ${(props) => props.color};
  font-size: 1.125rem;
  float: left;
  height: 27px;
  line-height: 27px;
  letter-spacing: -0.9px;
  margin-left: 60px;
  cursor: pointer;
  @media only screen and (max-width: 1152px) {
    font-size: 1rem;
    margin-left: 3vw;
  }

 
`;
const EventItem = styled(Link)`
  float: left;
  color ${(props) => props.color};
  
  font-size: 1.125rem;
  float: left;
  height: 27px;
  line-height: 27px;
  letter-spacing: -0.9px;
  margin-left: 60px;
  cursor: pointer;
  @media only screen and (max-width: 1152px) {
    font-size: 1rem;
    margin-left: 3vw;
  }
`;
const MMenu = styled.span`
  @media only screen and (max-width: 799px) {
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

function Header(match) {
  const headerRef = useRef();
  // console.log(detailMatch);
  // console.log(match);

  // if (matchtarget === "/event") {
  //   headerRef.current.setAttribute("style", "color:red");
  // }

  const [show, handleShow] = useState(false);
  // const [test, setTest] = useState(false);
  // const header = document.querySelector("header");

  useEffect(() => {
    if (match.match) {
      if (match.match.path !== "/") {
        if (window.scrollY > 80) {
          handleShow(true);
        } else {
          handleShow(true);
        }
      }
    }

    document.addEventListener("scroll", () => {
      if (match.match) {
        const matchtarget = match.match.path;
        if (matchtarget == "/") {
          if (window.scrollY > 80) {
            handleShow(true);
          } else {
            handleShow(false);
          }
        }
      }
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
    //window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setShowmenu(false);
  };
  const Depth2_move = () => {
    // const headerHeight = header.offsetHeight;
    // console.log(header);
    // const depth2 = document.querySelector(".depth2");
    // const depthY = depth2.offsetTop - 80;
    // console.log(depthY);
    // setShowmenu(false);
    // window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth3_move = () => {
    // const headerHeight = header.offsetHeight;
    // const depth3 = document.querySelector(".depth3");
    // const depthY = depth3.offsetTop - headerHeight;
    // setShowmenu(false);
    // window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth4_move = () => {
    // const headerHeight = header.offsetHeight;
    // const depth4 = document.querySelector(".depth4");
    // const depthY = depth4.offsetTop - headerHeight;
    // setShowmenu(false);
    // window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth5_move = () => {
    // const headerHeight = header.offsetHeight;
    // const depth5 = document.querySelector(".depth5");
    // const depthY = depth5.offsetTop - headerHeight;
    // setShowmenu(false);
    // window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const Depth6_move = () => {
    // const headerHeight = header.offsetHeight;
    // const depth6 = document.querySelector(".depth6");
    // const depthY = depth6.offsetTop - headerHeight;
    // setShowmenu(false);
    // window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };
  const ListRef = useRef();

  return (
    <Headerbox color={show ? "#fff" : "transparent"} ref={headerRef}>
      <GlobalStyles />
      <HeaderContainer>
        <Logo bg={show ? logoScroll : logoTop} href="/" />
        <List ref={ListRef}>
          <Item
            color={show ? "#000" : "#fff"}
            onClick={Depth1_move}
            href="/#depth1"
          >
            홈
          </Item>
          <Item
            color={show ? "#000" : "#fff"}
            onClick={Depth2_move}
            href="/#depth2"
          >
            안심병원
          </Item>
          <Item
            color={show ? "#000" : "#fff"}
            onClick={Depth3_move}
            href="/#depth3"
          >
            안심의료서비스
          </Item>
          {/* <Item
            color={show ? "#000" : "#fff"}
            onClick={Depth4_move}
            href="/#depth4"
          >
            안심변호사
          </Item> */}
          <Item
            color={show ? "#000" : "#fff"}
            onClick={Depth5_move}
            href="/#depth5"
          >
            제휴신청
          </Item>
          <Item
            color={show ? "#000" : "#fff"}
            onClick={Depth6_move}
            href="/#depth6"
          >
            다운로드
          </Item>
          <EventItem to="/event" color={show ? "#000" : "#fff"}>
            이벤트
          </EventItem>
        </List>
        <MMenu src={show ? sMobilemenu : mobilemenu} onClick={openMMenu} />
      </HeaderContainer>
      <MobileMenu visible={showmenu} closeMMenu={closeMMenu} />
    </Headerbox>
  );
}

export default Header;
