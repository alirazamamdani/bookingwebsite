import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
         <h1 className="headerTitle">A Lifetime of discounts?</h1>
         <p className="headerDesc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab quibusdam voluptates quasi ratione labore nam pariatur recusandae voluptate animi.
         </p>
         <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input type="text" placeholder="Where you want to go" className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
              <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText"> 2 adults 2 children 1 room</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
