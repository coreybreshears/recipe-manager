import React from "react";
import RecipeItem from "../RecipeItem";

const ListManager = ({ recipeList }) => {
  return (
    <>
      {recipeList.map((recipe) => (
        <RecipeItem key={recipe.uuid} recipe={recipe} />
      ))}
    </>
  );
};

export default ListManager;
