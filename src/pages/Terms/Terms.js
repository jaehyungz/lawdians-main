import React, { useEffect, useRef } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../../Components/GlobalStyles";
import Useterms from "./Useterms";
import Privacy from "./Privacy";
import ApplyInfo from "./ApplyInfo";
import Caveat from "./Caveat";
import useResizeHandler from "../../hooks/useResizeHandler";
import Header from "../../Components/Header";
import "./Terms.css";
const Container = styled.div`
  width: 1152px;
  margin: 0 auto;
  padding-bottom: 50px;
  @media only screen and (max-width: 1152px) {
    width: 90%;
  }
`;

const Linklist = styled.div`
  width: 100%;
  height: 80px;
  margin: 130px 0;
`;

const SLink = styled(Link)`
  float: left;
  width: 25%;
  height: 80px;
  line-height: 80px;
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  border-bottom: 4px solid #eee;
  cursor: pointer;
  @media only screen and (max-width: 1152px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.9rem;
    line-height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.is-selected {
    color: #fff;
    background-color: #4a64f5;
    border-bottom: 0;
  }
`;

const Terms = ({ location, match }) => {
  const { platform } = useResizeHandler();
  const matching = location.pathname;
  const searching = location.search;

  useEffect(() => {
    const linklist = document.querySelector(".linklist");
    const useterms = document.querySelector(".useterms");
    const privacy = document.querySelector(".privacy");
    const applyInfo = document.querySelector(".applyInfo");
    const caveat = document.querySelector(".caveat");
    const header = document.querySelector("header");

    if (searching === "?Notnav=true") {
      header.setAttribute("style", "display:none");
      linklist.setAttribute("style", "visibility:hidden");
    } else {
      linklist.removeAttribute("style");
      header.removeAttribute("style");
    }
    {
      matching === "/terms/useterms"
        ? useterms.setAttribute(
            "style",
            "color:#fff;background:#4a64f5;border-bottom:0;"
          )
        : useterms.removeAttribute("style");
    }
    {
      matching === "/terms/privacy"
        ? privacy.setAttribute(
            "style",
            "color:#fff;background:#4a64f5;border-bottom:0;"
          )
        : privacy.removeAttribute("style");
    }
    {
      matching === "/terms/applyInfo"
        ? applyInfo.setAttribute(
            "style",
            "color:#fff;background:#4a64f5;border-bottom:0;"
          )
        : applyInfo.removeAttribute("style");
    }

    {
      matching === "/terms/caveat"
        ? caveat.setAttribute(
            "style",
            "color:#fff;background:#4a64f5;border-bottom:0;"
          )
        : caveat.removeAttribute("style");
    }
  });
  window.scrollTo(0, 0);

  return (
    <div>
      <GlobalStyles />
      <Header match={match} />
      <Container>
        <Linklist className="linklist">
          <SLink to="/terms/useterms" className="useterms">
            이용약관
          </SLink>
          {platform === "desktop" ? (
            <SLink to="/terms/privacy" className="privacy">
              개인정보처리방침
            </SLink>
          ) : (
            <SLink to="/terms/privacy" className="privacy">
              개인정보
              <br />
              처리방침
            </SLink>
          )}

          <SLink to="/terms/applyInfo" className="applyInfo">
            신청안내
          </SLink>
          <SLink to="/terms/caveat" className="caveat">
            주의사항
          </SLink>
        </Linklist>

        <Route path="/terms/useterms" component={Useterms} />
        <Route path="/terms/privacy" component={Privacy} />
        <Route path="/terms/applyInfo" component={ApplyInfo} />
        <Route path="/terms/caveat" component={Caveat} />
      </Container>
    </div>
  );
};

export default Terms;
