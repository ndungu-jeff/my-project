import React, { useState, useEffect } from "react";
import { allRecipes } from "../api/recipes/recipes";
import RecipeView from "./RecipeView";
import NavBar from "./NavBar";

function Recipe () {
    const[recipes, setRecipes] = useState([]);
    useEffect(() =>{
        allRecipes().then((res) => setRecipes(res.data));
    },[])
    console.log(recipes)
    return (
        <>
        <NavBar/>
        <RecipeView recipes={recipes}/>
        </>
    )
}

export default Recipe; 