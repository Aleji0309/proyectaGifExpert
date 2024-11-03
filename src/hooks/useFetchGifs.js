import { useState, useEffect } from "react";
import getGifs from '../helpers/getGif';

const useFetchGifs = ( category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //cuando el componente se cargue por primera vez, ahi y solo ahi queremos la petiición HTTPS
  useEffect(() => {
    //   // Código que queremos ejeutar
    getImages();
  }, []);

  // // [] arreglo de dependencias, si el arreglo vacio significa que el codigo
  // // el hook solo se va a disparar la primera vez que se crea y construye el componente

  return {
    images: images,
    isLoading: isLoading
  };
};

export default useFetchGifs;
