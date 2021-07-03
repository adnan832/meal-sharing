import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ meals, setSearchMeal, searchActive }) {
  return (
    <div className="banner">
      <div className="search">
        <Search meals={meals} setMeals={setSearchMeal} />

        {searchActive &&
          meals.map((oneMeal) => {
            return (
              <div key={oneMeal.id}>
                <Link to={"meal/" + oneMeal.id}>
                  <h2>{oneMeal.title}</h2>
                </Link>
              </div>
            );
          })}
      </div>
      <div>
        <img
          src="./src/client/assets/images/mainPic.jpg"
          alt=""
          height="580px"
          width="1260px"
        />
      </div>
    </div>
  );
}
