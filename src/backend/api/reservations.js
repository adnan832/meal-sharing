const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservation");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    await knex("reservations").insert(request.body);
    response.json("Reservation is added");
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reservationsById = await knex("reservation").where({
      id: parseInt(request.params.id),
    });
    response.json(reservationsById);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updatedReservations = await knex("reservation")
      .where({ id: parseInt(request.params.id) })
      .update(request.body);
    response.json("Reservation updated");
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deletedReservation = await knex("reservation")
      .where({ id: parseInt(request.params.id) })
      .del();
  } catch (error) {
    throw error;
  }
  response.json("Reservation deleted");
});

module.exports = router;
