import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { closeIcon } from "../assets/images";
const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 100;
`;
const Container = styled.div`
  width: 500px;
  position: fixed;
  background: #fff;
  border-radius: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 120;
  overflow: hidden;
  @media only screen and (max-width: 650px) {
    width: 80%;
  }
`;
const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: transparent;
  background-image: url(${closeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  vertical-align: middle;
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
const Footer = styled.div`
  text-align: center;
  height: 50px;
  background-color: #4a64f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
`;
const Loading = styled.div`
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  vertical-align: middle;
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;

function Popup() {
  const [popup, setPopup] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `http://10.88.0.210:5500/api/events/pop-up`
      );
      setPopup(request.data);
      setloading(false);
      return request;
    }
    fetchData();
  }, []);

  const [showpopup, setShowpopup] = useState(true);

  const closeModal = () => {
    setShowpopup(false);
  };

  return (
    <div>
      {showpopup ? (
        <div>
          <Mask onClick={closeModal} />
          <Container>
            <Close onClick={closeModal} />
            {loading ? (
              <Loading>로딩중입니다.</Loading>
            ) : (
              <Img
                src={`http://10.88.0.210:5500/image/${popup.thumbnailUrl}`}
              />
            )}
            <Footer>
              <SLink to={`/event/${popup.no}`}>자세히 보기</SLink>
            </Footer>
          </Container>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
