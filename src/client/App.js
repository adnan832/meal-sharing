import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Home from "./components/Home";
import Meals from "./components/Meals";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Reservations from "./components/Reservations";
import Meal from "./components/Meal";
import Addmeal from "./components/Addmeal";
import Footer from "./components/Footer";
import Search from "./components/Search";

import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchedMeal, setSearchedMeal] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  async function fetchMeals() {
    const response = await fetch("/api/meals");
    const meals = await response.json();
    setMeals(meals);
  }
  function setSearchMeal(currentMeal) {
    setSearchedMeal(currentMeal);
  }

  return (
    <Router>
      <Header meals={meals} />
      <Switch>
        <Route exact path="/">
          <Home
            meals={searchedMeal.length > 0 ? searchedMeal : meals}
            setSearchMeal={setSearchMeal}
            searchActive={searchedMeal.length > 0 ? true : false}
          />
        </Route>
        <Route exact path="/meals">
          <Meals
            meals={searchedMeal.length > 0 ? searchedMeal : meals}
            setSearchMeal={setSearchMeal}
          />
        </Route>
        <Route path="/meal/:id">
          <Meal meals={meals} />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/reservations">
          <Reservations />
        </Route>
        <Route path="/addmeal">
          <Addmeal meals={meals} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
