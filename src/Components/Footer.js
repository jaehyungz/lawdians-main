import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { snsB, snsF, snsI, snsT, snsY } from "../assets/images";
const Footerbox = styled.footer`
  width: 100%;
  height: 297px;
  background: #fcfcfc;
  padding-top: 76px;
  @media only screen and (max-width: 650px) {
    height: unset;
    padding-top: 0;
  }
`;
const Container = styled.div`
  width: 1152px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;
const Textbox = styled.div`
  margin-right: ${(props) => props.right};
  @media only screen and (max-width: 650px) {
    width: 100%;
    margin: 20px 0;
  }
`;
const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -1px;
  color: #333;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -1px;
  color: #333;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 0.93rem;
  letter-spacing: -0.75px;
  color: #bbb;
  line-height: 30px;
  @media only screen and (max-width: 1152px) {
    font-size: 0.8rem;
  }
`;
const Sub = styled.span`
  font-size: 0.75rem;
  color: #4a64f5;
  line-height: unset;
  word-break: keep-all;
`;
const Sns = styled.ul`
  align-self: flex-end;
  @media only screen and (max-width: 650px) {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;
const Item = styled.li`
  float: left;
  background: url(${(props) => props.bg});
  width: 40px;
  height: 40px;
  background-size: contain;
  margin-left: 10px;
  cursor: pointer;
  :nth-child(1) {
    margin-left: 0;
  }
  @media only screen and (max-width: 1152px) {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
`;

function Footer() {
  const snsPage = (url) => {
    window.open(url);
  };

  const onCall = () => {
    document.location.href = "tel:1833-8603";
  };
  return (
    <Footerbox>
      <Container>
        <Textbox right={"77px"}>
          <Title onClick={onCall}>고객상담 1833-8603</Title>
          <Description>
            평일 10:00~18:00 <br /> 점심시간 12:30~13:30
            <br /> (토요일, 일요일, 공휴일 휴무)
            <br />
            E-mail: lawdians@lawdians.com
          </Description>
        </Textbox>
        <Textbox>
          <StyledLink to="/terms/useterms">약관모음</StyledLink>
          <Description>
            <Sub>
              로디언즈는 그 어떠한 병원 및 변호사에게 소개 및 알선 행위를 하지
              않으며, 그 어떠한 대가도 받지 않음을 알려드립니다!
            </Sub>
            <br />
            (주)로디언즈 | 대표이사 윤창기 | 서울시 동작구 상도로 369 숭실대학교
            창신관 162078호
            <br /> 사업자등록번호 896-87-00606 | 통신판매업 신고번호
            2017-서울동작-0636호
            <br /> 계좌번호 기업은행 071-103006-01-012
            <br /> ⓒ LAWDIANS All rights reserved.
          </Description>
        </Textbox>
        <Sns>
          <Item
            bg={snsY}
            onClick={() =>
              snsPage(
                "https://www.youtube.com/channel/UCsGBQPD4GhXbDI1Z84Izz6A"
              )
            }
          ></Item>
          <Item
            bg={snsI}
            onClick={() => {
              snsPage("https://www.instagram.com/lawdians/");
            }}
          ></Item>

          <Item
            bg={snsF}
            onClick={() => snsPage("https://www.facebook.com/Lawdians")}
          ></Item>
          <Item
            bg={snsT}
            onClick={() => snsPage("https://twitter.com/nettongrung")}
          ></Item>
          <Item
            bg={snsB}
            onClick={() => snsPage("https://blog.naver.com/lawdianskorea")}
          ></Item>
        </Sns>
      </Container>
    </Footerbox>
  );
}

export default Footer;
