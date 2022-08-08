import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailsManager from "../../components/RecipeDetails/DetailsManager";

import * as Styled from "./detailManager.style";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes/${id}`)
      .then((response) => setRecipe(response.data));
  }, [id]);

  return (
    <Styled.Container>
      <DetailsManager recipe={recipe} />
    </Styled.Container>
  );
};

export default RecipeDetails;
