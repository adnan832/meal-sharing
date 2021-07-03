import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/meals">Meals</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/addmeal">Add meal</Link>
    </div>
  );
}
