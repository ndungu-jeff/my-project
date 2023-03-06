import React from "react"
// allow a user to create an account on access
import RegisterUser from "./components/RegisterUser"
// Show user a log in screen if already registered or on registration to access site
import Login from "./components/Login"
// landing after log in
import Homepage from "./components/Homepage"
// present users with a form to add their own recipes
import NewRecipe from "./components/NewRecipe"
// browse a list of all recipes on site
import Recipes from "./components/Recipes"
// browse current users recipes
import SpecificRecipes from "./components/SpecificRecipes"

import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<RegisterUser />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/newrecipe" element={<NewRecipe />}/>
        <Route path="/recipes" element={<Recipes />}/>
        <Route path="/user/recipes" element={<SpecificRecipes />}/>
      </Routes>
    </div>
  )
}