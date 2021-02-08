import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Components/GlobalStyles";
import EventList from "./EventList";
import { BACKEND_URL } from "../../config/index";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Event = ({ match }) => {
  const URL = match.path;
  const header = document.querySelector("header");
  useEffect(() => {
    if (URL === "/event") {
      // header.setAttribute("style", "color:red");
    }
  }, []);

  return (
    <div>
      <Header match={match} />
      <EventList fetchUrl={`${BACKEND_URL}/api/events`} />
      <Footer />
    </div>
  );
};

export default Event;
