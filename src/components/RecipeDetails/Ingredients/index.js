import React, { useState, useEffect } from "react";
import * as Styled from "./ingredients.style";
import axios from "axios";
import Ingredient from "../Ingredient";

const Ingredients = ({ ingredients }) => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/specials`)
      .then((response) => setSpecials(response.data));
  }, []);

  return (
    <Styled.IngredientsBoard>
      <h1> Ingredients </h1>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.uuid}
          ingredient={ingredient}
          specials={specials}
        />
      ))}
    </Styled.IngredientsBoard>
  );
};

export default Ingredients;
