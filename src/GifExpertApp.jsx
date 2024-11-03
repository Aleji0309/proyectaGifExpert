import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Los Simpson"]);
  //console.log(categories);

  // Función que agrega una nueva categoria
  const handleAddCategory = (newCategory) => {
    // Valida que la categoria no exista previamente
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*Titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory
        //setCategories={setCategories} }
        handleAddCategory={handleAddCategory}
      />

      {/*Listado de Gif*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
