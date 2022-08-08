import React, { useEffect, useState } from "react";
import * as Styled from "./ingredient.style";

const Ingredient = ({ ingredient, specials }) => {
  const [matchSpecials, setMatchSpecials] = useState([]);

  useEffect(() => {
    const rlt = specials.filter((spc) => spc.ingredientId === ingredient.uuid);
    setMatchSpecials(rlt);
  }, [ingredient.uuid, specials]);

  return (
    <>
      <p>{`${ingredient.amount} ${ingredient.measurement} of ${ingredient.name}`}</p>
      {matchSpecials.map((special) => {
        return (
          <div key={special.uuid}>
            <Styled.SpecialDetail>{`-Specials`}</Styled.SpecialDetail>
            <Styled.SpecialDetail>{`${special.title}`}</Styled.SpecialDetail>
            <Styled.SpecialDetail>{`${special.type}`}</Styled.SpecialDetail>
            <Styled.SpecialDetail>{`${special.text}`}</Styled.SpecialDetail>
          </div>
        );
      })}
    </>
  );
};

export default Ingredient;
