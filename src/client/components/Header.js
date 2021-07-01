import Navigation from "./Navigation";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ meals }) {
  return (
    <div className="header">
      <div className="headerLogo">
        <Link to="/">
          <img
            src="./src/client/assets/images/mealsharing.png"
            width="190px"
            height="100px"
            alt="logo"
          />
        </Link>
      </div>
      <Link to="/">
        <div className="headerText">
          <h2>
            <i>
              Meal Sharing <br /> " Sharing is Caring :-) "
            </i>{" "}
          </h2>
        </div>
      </Link>

      <div className="navbar">
        <Navigation />
      </div>
    </div>
  );
}
