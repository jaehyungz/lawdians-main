import React from "react";
import GlobalStyles from "../../Components/GlobalStyles";
import Header from "../../Components/Header";
import SectionList from "../../Components/SectionList";
import Banner from "../../Components/Banner";
import Apply from "../../Components/Apply";
import Download from "../../Components/Download";
import Footer from "../../Components/Footer";
function Main() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Banner />
      <SectionList />
      <Apply />
      <Download />
      <Footer />
    </>
  );
}

export default Main;
