import React, { useRef, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import GlobalStyles from "../../Components/GlobalStyles";
import axios from "axios";
import styled from "styled-components";
import { BACKEND_URL } from "../../api/index";
import useResizeHandler from "../../hooks/useResizeHandler";

const Head = styled.div`
  margin: 80px 0 0 0;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
`;
const HeadTitle = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: -0.9px;
  color: #333;
  margin-right: 5px;
  float: left;
`;
const EventLength = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: -0.9px;
  color: #4a64f5;
  float: left;
`;
const Container = styled.div`
  width: 1152px;
  margin: 0px auto;
  text-align: center;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 799px) {
    display: inline-block;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap-reverse;
  flex-flow: wrap;
  padding-bottom: 28px;
  @media only screen and (max-width: 799px) {
    display: inline-block;
  }
`;
const List = styled(Link)`
  width: 350px;
  display: inline-block;
  margin-top: 28px;
  margin-right: 51px;
  :nth-child(3n) {
    margin-right: 0;
  }
  > div {
    position: relative;
    z-index: 0;
  }
  @media only screen and (max-width: 1152px) {
    width: 30%;
    margin-right: 5%;
  }

  @media only screen and (max-width: 799px) {
    margin-right: 0;
    width: 100%;
  }
`;
const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 5px;
  vertical-align: middle;
  @media only screen and (max-width: 1152px) {
    height: unset;
    max-height: 200px;
  }

  @media only screen and (max-width: 799px) {
    float: left;
    width: 160px;
    height: 160px;
    margin-right: 8px;
  }
  @media only screen and (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;
const Title = styled.p`
  font-weight: 500;
  color: #333;
  height: 51px;
  font-size: 1.125rem;
  letter-spacing: -0.9px;
  overflow-y: hidden;
  text-overflow: ellipsis;
  text-align: left;
  @media only screen and (max-width: 799px) {
    margin-top: 10px;
    font-size: 1rem;
    max-height: 40px;
    height: unset;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.875rem;
  }
`;
const Date = styled.p`
  font-weight: 400;
  color: #bbb;
  font-size: 0.9375rem;
  float: right;
  @media only screen and (max-width: 799px) {
    float: left;
    font-size: 0.75rem;
  }
`;
const Button = styled.button`
  width: 355px;
  height: 60px;
  border-radius: 50px;
  background-color: #4a64f5;
  color: #fff;
  outline: none;
  border: 0;
  margin: 69px 0;
  font-size: 1.25rem;
  letter-spacing: -1px;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 200px;
    height: 50px;
  }
`;

function EventList({ fetchUrl }) {
  const [events, setEvents] = useState([]);
  const [more, setMore] = useState(true);
  const { platform } = useResizeHandler();

  const fetchData = async () => {
    try {
      const request = await axios.get(
        `${fetchUrl}?take=12&skip=${events.length}`
      );
      setEvents((prev) => [...prev, ...request.data]);

      if (request.data.length !== 12) {
        setMore(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchMore = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <Container>
          <HeadTitle>이벤트 목록</HeadTitle>
          <EventLength>({events.length})</EventLength>
        </Container>
      </Head>
      <Container>
        <GlobalStyles />
        <Flex>
          {
            events.length > 0 ? (
              <ListContainer>
                {events.map((event, idx) => (
                  <List to={`/event/${event.no}`} key={idx}>
                    {event.status === "종료" ? (
                      <div>
                        <Mask>
                          {platform === "desktop" ? (
                            <span>종료된 이벤트 입니다.</span>
                          ) : (
                            <span>종료</span>
                          )}
                        </Mask>
                        <Img
                          src={`${BACKEND_URL}/image/${event.thumbnailUrl}`}
                        />
                      </div>
                    ) : (
                      <Img src={`${BACKEND_URL}/image/${event.thumbnailUrl}`} />
                    )}

                    <Title>{event.title}</Title>
                    <Date>{event.beginning}</Date>
                  </List>
                ))}
              </ListContainer>
            ) : null
            // <Noevent>콘텐츠가 없습니다.</Noevent>
          }
        </Flex>
        {/* <Route to={`/event/${events.no}`} component={EventDetail} /> */}
        {more ? <Button onClick={fetchMore}>더보기</Button> : null}
      </Container>
    </>
  );
}

export default EventList;
