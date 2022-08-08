import React, { useState, useEffect } from "react";
import axios from "axios";

import ListManager from "../../components/RecipeList/ListManager";

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes`)
      .then((response) => setRecipeList(response.data));
  }, []);

  return <ListManager recipeList={recipeList} />;
};

export default RecipeList;
