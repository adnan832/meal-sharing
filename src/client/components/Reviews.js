import React from "react";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const response = await fetch("/api/reviews");
    const reviews = await response.json();
    setReviews(reviews);
  }
  return (
    <div className="mealsTop">
      {reviews.map((oneReview) => {
        return (
          <div className="mealsMain1" key={oneReview.id}>
            <h4>{oneReview.title}</h4>
            <p>{oneReview.description}</p>
            <p>Stars : {oneReview.stars}</p>
            <p>Meal id : {oneReview.meal_id}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
