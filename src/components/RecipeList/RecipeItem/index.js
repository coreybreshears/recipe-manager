import React from "react";
import * as Styled from "./recipeItem.style";
import { useNavigate } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const navigator = useNavigate();

  const navigateDetails = () => {
    navigator(`/recipes/${recipe.uuid}`);
  };

  return (
    <Styled.Container>
      <img
        src={process.env.REACT_APP_BASE_URL + recipe.images.small}
        alt="recipe"
      />
      <Styled.OverView>
        <p>{`Title: ${recipe.title}`}</p>
        <p>{`Description: ${recipe.description}`}</p>
        <p>{`Servings: ${recipe.servings}`}</p>
        <p>{`PrepTime: ${recipe.prepTime}`}</p>
        <p>{`CookTime: ${recipe.cookTime}`}</p>
      </Styled.OverView>
      <Styled.DetailButton onClick={navigateDetails}>
        Details...
      </Styled.DetailButton>
    </Styled.Container>
  );
};

export default RecipeItem;
