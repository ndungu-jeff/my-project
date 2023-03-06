import React from "react";
import { Card } from "flowbite-react";

function RecipeCard({ recipe }) {
  return (
    <div className="max-w-sm">
      <Card imgSrc={recipe.image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipe.name}
        </h5>
        <h3>Minutes To Prepare: {recipe.minutes}</h3>
        <h2>Video Link: {recipe.video}</h2>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {recipe.description}
        </p>
      </Card>
    </div>
  );
}

export default RecipeCard;
