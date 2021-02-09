import React, { useRef } from "react";
import styled from "styled-components";
import { con1, con2, con3 } from "../assets/images";

const SectionContainer = styled.div`
  width: 100%;
  height: 760px;
  background-color: ${(props) => props.bg};
  @media only screen and (max-width: 650px) {
    height: unset;
  }
`;

const Container = styled.div`
  width: 1152px;
  height: 760px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
  @media only screen and (max-width: 650px) {
    height: unset;
    flex-direction: ${(props) =>
      props.direction ? props.direction : "column-reverse"};
    padding: 30px 0;
    background-color: ;
  }
`;

const Img = styled.img`
  width: 659px;
  height: 600px;
  vertical-align: middle;
  @media only screen and (max-width: 1152px) {
    width: 50%;
    height: unset;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
    height: unset;
    margin: 30px 0;
  }
`;

const Textbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${(props) => props.left}px;
  @media only screen and (max-width: 1152px) {
    margin-left: ${(props) => (props.left ? "40px" : "0px")};
  }
  @media only screen and (max-width: 650px) {
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  height: 66px;
  line-height: 66px;
  letter-spacing: -2.25px;
  color: #333;
  margin-bottom: 5px;
  @media only screen and (max-width: 650px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  line-height: 29px;
  letter-spacing: -1px;
  color: #333;
  margin-bottom: 15px;
  @media only screen and (max-width: 650px) {
    font-size: 1rem;
    height: unset;
    line-height: unset;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 35px;
  letter-spacing: -0.8px;
  color: #666;
  @media only screen and (max-width: 650px) {
    font-size: 0.93rem;
    height: unset;
    line-height: 30px;
    letter-spacing: -2px;
  }
`;

function SectionList(props) {
  const hospital = useRef();
  const service = useRef();
  const lawyer = useRef();

  return (
    <div>
      <SectionContainer>
        <Container id="depth2" ref={hospital}>
          <Img src={con1} />
          <Textbox left={70}>
            <Title>안심병원</Title>
            <SubTitle>
              로디언즈의 “안심 병원”은 다음의 조건들을 충족합니다.
            </SubTitle>
            <Description>
              의료 분야별 “전문의”
              <br /> 위급 상황을 대비한 “응급장비보유”
              <br /> 의료서비스의 최소의 안전망 “수술실 CCTV”
              <br /> 비양심적 의료행위 “대리수술 예방”
            </Description>
          </Textbox>
        </Container>
      </SectionContainer>
      <SectionContainer bg={"#f6f8ff"}>
        <Container direction={"column"} id="depth3" ref={service}>
          <Textbox>
            <Title>안심의료서비스</Title>
            <SubTitle>
              의료서비스 전에 로디언즈와 함께 나를 지키는 방법!
            </SubTitle>
            <Description>
              만약에 발생 될 의료분쟁(소송)에 함께 고민하고 대비하며
              <br />
              로디언즈와 주기적으로 나의 상태 체크 및 “의료기록자료”보관
              <br />
              나의 의료정보를 로디언즈의 “블록체인” 암호화 기술로 안전하게 보관.
            </Description>
          </Textbox>
          <Img src={con2} />
        </Container>
      </SectionContainer>
      {/* <SectionContainer>
        <Container id="depth4" ref={lawyer}>
          <Img src={con3} />
          <Textbox left={70}>
            <Title>안심변호사</Title>
            <SubTitle>의료사고 더이상 혼자 걱정하지마세요!</SubTitle>
            <Description>
              안심변호사가 고객과 함께 의료사고에 대응
              <br /> 선임료 무료 및 패소시 비용 없음
            </Description>
          </Textbox>
        </Container>
      </SectionContainer> */}
    </div>
  );
}

export default SectionList;
