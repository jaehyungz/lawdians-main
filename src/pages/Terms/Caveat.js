import React from "react";
import styled from "styled-components";
const TabTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TabBlock = styled.div`
  text-align: left;
`;

const STabPanel = styled.div`
  text-align: center;
`;

function Caveat() {
  return (
    <STabPanel>
      <TabTitle>주의사항</TabTitle>
      <TabBlock className="Tabblock">
        <ul>
          <li>- 보장내용</li>
        </ul>
        <table className="carfulTable">
          <colgroup>
            <col width="20%" />
            <col width="40%" />
            <col width="40%" />
          </colgroup>
          <thead>
            <tr>
              <td>서비스명</td>
              <td>설명</td>
              <td>서비스 보장 부위</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">안심의료보장</td>
              <td>
                성형 수술의 전/후 사진 및 의료기록정보를 보관하고 저렴한
                금액으로 무료안심변호사를 선임할 수 있는 서비스입니다.
              </td>
              <td>
                성형외과 (필러, 보톡스, 피부, 눈, 코, 안면윤곽, 가슴, 양악,
                지방)
              </td>
            </tr>
            <tr>
              <td>
                비성형 수술의 전/후 의료기록정보를 보관하고 저렴한 금액으로
                무료안심변호사를 선임할 수 있는 서비스입니다.
              </td>
              <td>
                안과, 치과, 소아과, 산부인과, 비뇨기과, 정형외과, 피부과, 내과
              </td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            ① 서비스 기본 보장기간은 1개월이며, 보장기간 추가 신청을 통해 3개월
            또는 6개월로 연장하실 수 있습니다.
          </li>
          <li>
            ② 수술일 당일부터 안심의료서비스의 보장기간의 효력이
            발생합니다.(수술일자로부터 1일)
          </li>
          <li>
            ③ 수술 후 정보는 수술일자로부터 보장기간 종료 전까지 등록해주셔야
            하며, 정보가 등록되어 있지 않을 경우 안심변호사를 통한 법적 대응이
            불가능합니다.
          </li>
        </ul>
        <ul style={{ marginTop: "50px" }}>
          <li>- 꼭 알아두실 사항</li>
          <li>
            ① 수술(시술)을 받는 당사자 본인이 직접 안심의료서비스를 신청하지
            않았을 경우 수술 후 사고발생 시 무료 변호사 대응이 불가능해요!
          </li>
          <li>
            ② 수술 전 사진 정보(수술부위 정면, 좌측 45도, 우측 45도 전체 사진)
            이미지 등 모든 필수입력 정보는 반드시 입력해주셔야 하며, 수술일 기준
            3일 이내에는 입력하신 정보 수정이 불가능합니다.
          </li>
          <li>
            ③ 결제 완료 및 서비스 정보등록 후 수술일자 기준 14일 전까지 서비스
            계약을 철회 및 환불할 경우 100% 환불금액을 지급합니다. 다만,
            수술일자 기준 14일 이내에 서비스 계약을 철회 및 환불할 경우 결제
            금액의 50%만 환불금액으로 지급하며, 수술일자 기준 3일 이내에는
            서비스 계약을 철회 및 환불할 수 없습니다.
          </li>
          <li>
            ④ 안심의료서비스 신청 간 궁금하신 사항은 로디언즈 안심센터
            대표번호(1833-8603)를 통해 언제든지 문의해주세요!
          </li>
        </ul>
      </TabBlock>
    </STabPanel>
  );
}

export default Caveat;
