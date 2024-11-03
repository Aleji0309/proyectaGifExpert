import { useState } from "react";

const AddCategory = ({ handleAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // Función que retorna el valor del input
  const handleReadInput = (event) => {
    setInputValue(event.target.value);
  };

  // Función para manejar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    
    // Agrega la nueva categoría
    //setCategories(categories => [inputValue, ...categories]);
    handleAddCategory(inputValue.trim());
    
    // Limpia el input después de enviar
    setInputValue(''); 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleReadInput}
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue} // Asegúrate de vincular el valor del input
        />
      </form>
    </>
  );
};

export default AddCategory;
