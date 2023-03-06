import { backendAxios } from "../axios";

export const createRecipe = async (
    name,
      category,
      minutes,
      image,
      video,
      user_id,
      description
) => {
    return await backendAxios.post('/recipes', {
        name,
      category,
      minutes,
      image,
      video,
      user_id,
      description     
    });
};

export const allRecipes = async () => {
    return await backendAxios.get('/recipes')
}

export const userRecipes = async (user_id) => {
    return await backendAxios.get(`/recipes/${user_id}`)
}