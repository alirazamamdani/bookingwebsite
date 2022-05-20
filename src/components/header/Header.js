import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const Header = ({ type }) => {
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [optionValues, setOptionValues] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleClick = (name, operation) => {
    setOptionValues((prevState) => {
      return {
        ...prevState,
        [name]:
          operation === "i" ? optionValues[name] + 1 : optionValues[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listmode" : "headerContainer"
        }
      >
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

        {type !== "list" && (
          <>
            <h1 className="headerTitle">A Lifetime of discounts?</h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab
              quibusdam voluptates quasi ratione labore nam pariatur recusandae
              voluptate animi.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where you want to go"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${optionValues.adult} adult . ${optionValues.children} children . ${optionValues.room} room`}{" "}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionsContainer">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleClick("adult", "i")}
                        >
                          +
                        </button>
                        <span className="optionCounterNumber">
                          {optionValues.adult}
                        </span>
                        <button
                          disabled={optionValues.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleClick("adult", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionsContainer">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleClick("children", "i")}
                        >
                          +
                        </button>
                        <span className="optionCounterNumber">
                          {optionValues.children}
                        </span>
                        <button
                          disabled={optionValues.children <= 1}
                          className="optionCounterButton"
                          onClick={() => handleClick("children", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionsContainer">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleClick("room", "i")}
                        >
                          +
                        </button>
                        <span className="optionCounterNumber">
                          {optionValues.room}
                        </span>
                        <button
                          disabled={optionValues.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleClick("room", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
