import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./detailManager.style";

import Ingredients from "../Ingredients";

import { isEmpty } from "../../../utils";
import Directions from "../Directions";

const DetailsManager = ({ recipe }) => {
  const isRecipeEmpty = useMemo(() => {
    return isEmpty(recipe);
  }, [recipe]);

  const navigator = useNavigate();

  return (
    !isRecipeEmpty && (
      <Styled.Board>
        <Styled.OverViewContainer>
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
          <Styled.Button onClick={() => navigator("/")}>
            Recipes...
          </Styled.Button>
        </Styled.OverViewContainer>
        <Styled.DetailsContainer>
          <Ingredients ingredients={recipe.ingredients} />
          <Directions directions={recipe.directions} />
        </Styled.DetailsContainer>
      </Styled.Board>
    )
  );
};

export default DetailsManager;
