import React, { useState } from "react";

const startValues = {
  title: "",
  location: "",
  description: "",
  max_reservations: "",
  when: "",
  price: "",
};

const AddMeal = ({ meals }) => {
  const [inputValues, setInputValues] = useState(startValues);
  const changeEventhandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  function onAddData(e) {
    e.preventDefault();
    const meal = {
      title: inputValues.title,
      description: inputValues.description,
      location: inputValues.location,
      when: inputValues.when,
      max_reservations: inputValues.maxReservations,
      price: inputValues.price,
    };

    const response = addDataToDb("/api/meals", meal);
    console.log(response, response.ok);
    if (response) {
      const messagge = `Thank You, Your Meal : ${meal.title} Added`;
      alert(messagge);
    } else {
      throw new Error(response.status);
    }

    setInputValues(startValues);
  }
  async function addDataToDb(url = "", data = {}) {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.ok;
    } catch (error) {
      return error;
    }
  }
  function selectedOptions() {
    meals.map((meal) => {
      return (
        <option value={meal.title} width="250px">
          {meal.title}
        </option>
      );
    });
  }

  return (
    <div className="reservation">
      <h3>Please Enter details to add Meal</h3>

      <h3>Add Meal</h3>
      <form className="reserveform" onSubmit={onAddData}>
        <label htmlFor="location">Enter Meal name* : </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={inputValues.title}
          onChange={changeEventhandler}
        ></input>

        <label htmlFor="location">Your Location* : </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={inputValues.location}
          onChange={changeEventhandler}
        ></input>

        <label htmlFor="when">Date of event * : </label>
        <input
          type="date"
          id="when"
          name="when"
          required
          min={new Date()}
          value={inputValues.when}
          onChange={changeEventhandler}
          id="#addmealdate"
        ></input>

        <label htmlFor="max_reservations">Max Reservations* : </label>
        <input
          type="number"
          id="max_reservations"
          name="maxReservations"
          required
          value={inputValues.maxReservations}
          onChange={changeEventhandler}
        ></input>

        <label htmlFor="price">Price* : </label>
        <input
          type="number"
          id="price"
          name="price"
          value={inputValues.price}
          required
          onChange={changeEventhandler}
        ></input>

        <label htmlFor="description" className="meal_description">
          Description* :
        </label>
        <textarea
          id="description"
          name="description"
          value={inputValues.description}
          required
          onChange={changeEventhandler}
          width="850px"
        ></textarea>

        <button type="submit" className="meal_submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddMeal;
