import React, { Fragment } from "react";
import Feature from "../../components/featured/Feature";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <div className="HomeContainer">
        <Feature />
      </div>
    </Fragment>
  );
};

export default Home;
