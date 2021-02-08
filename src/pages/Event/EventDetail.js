import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Container = styled.div`
  width: 550px;
  margin: 130px auto 50px;
  text-align: center;
  @media only screen and (max-width: 650px) {
    width: 90%;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Titlebox = styled.div`
  border-bottom: 1px solid #dcdcdc;
  text-align: left;
  width: 100%;
  word-break: break-all;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 1.125rem;
  letter-spacing: -0.9px;
  font-weight: 800;
  color: #333;
  width: 100%;
`;
const Date = styled.div`
  margin-top: 5px;
  font-size: 0.9375rem;
  font-weight: 400;
  color: #bbb;
  width: 100%;
  margin-bottom: 20px;
`;

const Noimage = styled.div``;
const Contents = styled.div`
  width: 100%;
  img {
    width: 100%;
    vertical-align: top;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #333;
    letter-spacing: -0.9px;
    line-height: 27px;
    text-align: left;
    margin: 20px 0;
  }
  .ft_bold {
    font-weight: 800;
    display: block;
  }
`;

function EventDetail({ fetchUrl, match }) {
  const [details, setDetail] = useState([]);
  const target = match.params.no;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `http://10.88.0.210:5500/api/events/${target}`
      );
      // console.log(request.data);
      setDetail(request.data);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const stringHTML = details.contents;

  return (
    <>
      <Header match={match} />
      <Container>
        {details.thumbnailUrl ? (
          <Img src={`http://10.88.0.210:5500/image/${details.thumbnailUrl}`} />
        ) : (
          <Noimage>이미지가 없습니다.</Noimage>
        )}
        <Titlebox>
          <Title>{details.title}</Title>
          <Date>{details.beginning}</Date>
        </Titlebox>
        <Contents dangerouslySetInnerHTML={{ __html: stringHTML }} />
      </Container>
      <Footer />
    </>
  );
}

export default EventDetail;
