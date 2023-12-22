import React, { useState } from "react";
import NavBar from "./NavBar";
import { Button } from "flowbite-react";

// functions
import { createRecipe } from "../api/recipes/recipes";

const NewRecipe = () => {
  const [values, setValues] = useState({
    name: "",
    category: "",
    minutes: "",
    image: "",
    video: "",
    user_id: 3,
    description: "",
  });
  const { name, category, minutes, image, video, user_id, description } =
    values;
  // handle input change
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };
  // handle submission
  function handleSubmit(e) {
    e.preventDefault();
    return createRecipe(
      name,
      category,
      minutes,
      image,
      video,
      user_id,
      description
    )
      .then((res) => {
        if (res.status === 200) {
          console.log("Recipe Added successfully");
          // navigate('/user/recipes')
        } else {
          console.log(res.data.message);
        }
      });
  }

  return (
    <>
      <NavBar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Recipe
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dish Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange("name")}
                  value={name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type dish name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  for="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Paste an image link of prepared dish
                </label>
                <input
                  onChange={handleChange("image")}
                  value={image}
                  type="link"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="drive.google/shared/trtrte564"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  for="video"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Paste an video link of prepared dish
                </label>
                <input
                  onChange={handleChange("video")}
                  value={video}
                  type="link"
                  name="video"
                  id="video"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="https://youtube.com/x4rwywrywyyyw"
                  required=""
                />
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  onChange={handleChange("category")}
                  value={category}
                  id="category"
                  placeholder="Select category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="African">Tradition African Cuisines</option>
                  <option value="Asian">Asian Cuisines</option>
                  <option value="Spanish">Spanish Cuisine</option>
                  <option value="Italian">Italian Cuisine</option>
                  <option value="Chinese">Chinese Cuisines</option>
                  <option value="American">American Cuisine</option>
                </select>
              </div>
              <div>
                <label
                  for="time"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Time To Prepare (Mins)
                </label>
                <input
                  onChange={handleChange("minutes")}
                  value={minutes}
                  type="number"
                  name="time"
                  id="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="30"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  onChange={handleChange("description")}
                  value={description}
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 my-2"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              onClick={console.log("Click")}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Recipe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewRecipe;
