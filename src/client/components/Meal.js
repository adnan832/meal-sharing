import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Reservations from "./Reservations";

export default function Meal({ meals }) {
  const [isAvailabe, setisAvailabe] = useState(false);
  const [meal, setMeal] = useState({});
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setMeal(meals.find((oneMeal) => oneMeal.id == id));
    fetchaVailable();
  }, []);

  async function fetchaVailable() {
    const response = await fetch("/api/meals?availableReservations=true");
    const available = await response.json();

    const availableMeal = available.find((oneItem) => oneItem.id == id);
    if (availableMeal) setisAvailabe(true);
  }

  return (
    <div className="mealTop">
      {meal && (
        <div>
          <img
            src={`./src/client/assets/images/${meal.title}.jpg`}
            width="350px"
            height="225px"
            alt={meal.title}
          />
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <p>Location : {meal.location}</p>
          <p>Date : {meal.when}</p>
          <p>Max Reservations : {meal.max_reservations}</p>
          <p>Price : {meal.price}</p>
        </div>
      )}

      {isAvailabe ? (
        <button onClick={() => setShowForm(true)}>Reserve Seat</button>
      ) : (
        <h2> No reservation available for this meal</h2>
      )}

      {showForm && <Reservations meal={meal} />}
    </div>
  );
}
