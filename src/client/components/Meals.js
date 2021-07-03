import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
export default function Meals({ meals, setSearchMeal }) {
  return (
    <div className="mealsTop">
      <div className="mealssearch">
        <Search meals={meals} setMeals={setSearchMeal} />
      </div>
      {meals.map((oneMeal, index) => {
        return (
          <div key={oneMeal.id} className="mealsMain">
            <div className="mealsImage">
              <Link to={"meal/" + oneMeal.id}>
                <img
                  src={`./src/client/assets/images/${oneMeal.title}.jpg`}
                  width="250px"
                  height="225px"
                  alt={oneMeal.title}
                />
              </Link>
            </div>
            <div className="mealsDetail">
              <Link to={"meal/" + oneMeal.id}>
                <h4>{oneMeal.title}</h4>
              </Link>
              <hr />
              <p>Location : {oneMeal.location}</p>
              <p>Maximum Reservations : {oneMeal.max_reservations}</p>
              <p>Price : {oneMeal.price} DKK</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
