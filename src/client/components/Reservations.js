import { useState } from "react";
import React from "react";

export default function Reservations({ meal }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [guests, setGuests] = useState("");
  const [email, setEmail] = useState("");

  const saveReservation = async (reservation) => {
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    const message = await response.json();
    alert(message);
  };
  function submitData(e) {
    e.preventDefault();
    const reservation = {
      number_of_guests: guests,

      contact_phonenumber: number,
      contact_name: name,
      contact_email: email,
      meal_id: meal.id,
    };
    saveReservation(reservation);
  }
  return (
    <div className="reservation ">
      <h4>Reserve this meal</h4>
      <form className="reserveform" onSubmit={submitData}>
        <label htmlFor="">Name* </label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
        <br />
        <label htmlFor="">Phone Number* </label>
        <input
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          required
        />
        <br />
        <label htmlFor="">Guests* </label>
        <input
          name="guest"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          type="number"
          required
        />
        <br />
        <label htmlFor="">Email* </label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <br />
        <br />
        <button type="submit" width="50px">
          Submit
        </button>
      </form>
    </div>
  );
}
