import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Search({ meals, setmeals }) {
  const [search, setsearch] = useState("");

  useEffect(() => {
    if (search == "") {
      setmeals([]);
    } else {
      const filteredProducts = meals.filter((oneProduct) => {
        if (oneProduct.title.toLowerCase().includes(search)) {
          return oneProduct;
        }
      });

      setmeals(filteredProducts);
    }
  }, [search]);

  function handelSearch(e) {
    console.log(e.target.value);
    setsearch(e.target.value);
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
