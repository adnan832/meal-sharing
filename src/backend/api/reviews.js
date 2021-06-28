const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const allReviews = await knex("reviews").select("*");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

const addReviews = async ({ body }) => {
  const { title, description, meal_id, stars, created_date } = body;
  return await knex("reviews").insert({
    title: title,
    description: description,
    meal_id: meal_id,
    stars: stars,
    created_date: created_date,
  });
};
router.post("/", async (request, response) => {
  addReviews({
    body: request.body,
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});

const getReviewsById = async ({ body, id }) => {
  try {
    const { title, description, meal_id, stars, created_date } = body;
    return await knex("reviews")
      .where({
        id: id,
      })
      .select("*");
  } catch (error) {
    console.log(error);
  }
};
router.get("/:id", async (req, res) => {
  getReviewsById({
    body: req.body,
    id: req.params.id,
  })
    .then((result) => res.json(result))
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});

const getUpdatedReview = async ({ body, id }) => {
  const { title, description, meal_id, stars, created_date } = body;
  const meal = await knex.from("reviews").select("*").where({
    id: id,
  });
  if (meal.length === 0) {
    throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
  }
  const queryDto = {
    title: title,
  };
  if (Object.keys(queryDto).length !== 0) {
    return await knex("reviews")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};
router.put("/:id", async (req, res) => {
  getUpdatedReview({
    body: req.body,
    id: req.params.id,
  })
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(400).send("Bad request").end();
      console.log(error);
    });
});

const deleteReview = async ({ id }) => {
  try {
    if (!id) {
      return "something went wrong, try againnnnn";
    }
    return knex("reviews")
      .where({
        id: id,
      })
      .del();
  } catch (err) {
    console.log(err);
    return "something went wrong, try again";
  }
};
router.delete("/:id", async (req, res) => {
  deleteReview({
    id: req.params.id,
  })
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(400).send("Bad request").end();
      console.log(error);
    });
});
module.exports = router;
