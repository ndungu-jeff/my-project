import React, { useState, useEffect } from "react";
import { userRecipes } from "../api/recipes/recipes";
import RecipeView from "./RecipeView";
import NavBar from "./NavBar";

function SpecificRecipes () {
    let user_id = 2;
    const[recipes, setRecipes] = useState([]);
    useEffect(() =>{
        userRecipes(user_id).then((res) => setRecipes(res.data));
    },[])
    console.log(recipes)
    return (
        <>
        <NavBar/>
        <RecipeView recipes={recipes}/>
        </>
    )
}

export default SpecificRecipes; 