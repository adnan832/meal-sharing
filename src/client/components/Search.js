import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Search({ meals, setMeals }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search == "") {
      setMeals([]);
    } else {
      const filteredProducts = meals.filter((oneProduct) => {
        if (oneProduct.title.toLowerCase().includes(search)) {
          return oneProduct;
        }
      });

      setMeals(filteredProducts);
    }
  }, [search]);

  function handelSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handelSearch}
        placeholder="Search product"
        className="searchBox"
      />
    </div>
  );
}
