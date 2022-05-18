import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
    </Fragment>
  );
};

export default Home;
