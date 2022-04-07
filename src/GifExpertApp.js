import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  //   const categories = ["One punch", "Samurai X", "Dragon Ball"];
  const [categories, setcategories] = useState([
    "One punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  const handleAdd = () => {
    const categorie = "Hunter X";
    setcategories([...categories, categorie]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory></AddCategory>
      <hr></hr>
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>category</li>;
        })}
      </ol>
    </>
  );
};
export default GifExpertApp;
