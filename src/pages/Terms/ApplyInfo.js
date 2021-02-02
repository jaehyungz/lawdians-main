import React from "react";
import styled from "styled-components";
const TabTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TabSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 50px;
`;
const TabBlock = styled.div`
  text-align: left;
`;

const STabPanel = styled.div`
  text-align: center;
`;

function ApplyInfo() {
  return (
    <STabPanel>
      <TabTitle>신청안내</TabTitle>
      <TabSubtitle>안심 의료 서비스</TabSubtitle>
      <TabBlock className="Tabblock">
        <ul>
          <li>- 신청조건 및 비용</li>
        </ul>
        <table className="priceTable">
          <thead>
            <tr>
              <td>서비스 구분</td>
              <td>보장기간</td>
              <td>신청연령대</td>
              <td>비고</td>
              <td>가입비용</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">안심의료서비스</td>
              <td>1개월</td>
              <td rowSpan="3">전연령</td>
              <td rowSpan="3">
                19세 미만 청소년은 보호자 동의 필요 (비상연락망 기재 필수)
              </td>
              <td rowSpan="3">서비스 신청 시 최초 1회 일시납 (월납, 연납X)</td>
            </tr>
            <tr>
              <td>3개월</td>
            </tr>
            <tr>
              <td>6개월</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>- 신청 절차</li>
          <li>
            ① '안심의료서비스' 페이지에서 신청을 위한 '기본정보', '안심변호사
            선임', '병원정보', '결제정보'를 기재하신 후 결제해 주세요.
          </li>
          <li>
            ② 로디언즈 전담 가디언이 서비스 신청정보를 검토 후 서비스 가입 확정
            및 성형 수술에 대한 전반적인 안내를 위해 기재하신 연락처로
            연락드립니다.
          </li>
          <li>
            ③ 서비스 신청 후 가입이 확정되시면 계약영수증 및 보증서,
            사건위임계약서 각각 1부는 로디언즈 홈페이지 나의 서비스 메뉴 내
            서비스 계약서 페이지에서 확인하실 수 있습니다.
          </li>
          <li>
            ④ 수술 후 '수술 후 정보보관' 메뉴를 통해 보장기간 내 정해진 주기에
            맞게 정보보관을 해주시면 되며, 정보를 등록/보관하는 진행주기는
            다음과 같습니다.
          </li>
        </ul>
        <table className="stepTable">
          <thead>
            <tr>
              <td>서비스 구분</td>
              <td>정보등록 주기</td>
              <td>정보등록 횟수</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기본 1개월차</td>
              <td>3일마다 수술 후 정보 등록 필요</td>
              <td>최소 월 9~10회</td>
            </tr>
            <tr>
              <td>추가 2개월차</td>
              <td>7일마다 수술후 정보 등록 필요</td>
              <td>최소 월 4회</td>
            </tr>
            <tr>
              <td>추가 3개월차</td>
              <td>14일마다 수술후 정보 등록 필요</td>
              <td>최소 월 2회</td>
            </tr>
            <tr>
              <td>추가 4~6개월차</td>
              <td>월 1회 수술후 정보 등록 필요</td>
              <td>최소 월 1회</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            ⑤ 수술 후 사고발생 시 '안심센터' 메뉴 내 '사고접수'를 통해
            문의하시거나, 대표번호(1833-8603)를 통해 연락주시면 담당 가디언이
            응대해 드립니다.
          </li>
          <li>
            ⑥ 병원 과실 여부 판단을 위해 수술 부위와 관련되어 사고를 증명할 수
            있는 진단서가 필요하며, 진단서를 통해 병명 및 장해 진단을 받았을
            경우 진단을 위해 지불하신 금액은 해당 영수증을 보내주시면 전액
            환급해 드립니다.
          </li>
          <li>
            ⑦ 병원 과실로 인한 사고로 확정되면 로디언즈 안심변호사가 의료사고
            대응을 진행해 드립니다.
          </li>
        </ul>
      </TabBlock>
    </STabPanel>
  );
}

export default ApplyInfo;
