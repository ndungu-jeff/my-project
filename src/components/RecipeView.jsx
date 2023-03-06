import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeView({ recipes }) {
  const displayRecipeCards = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });
  return (
    <div class="grid grid-cols-4 gap-4">
      {displayRecipeCards}
    </div>
  );
}

export default RecipeView;
