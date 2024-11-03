const getGifs = async (category) => {
    // Variable que contiene URL
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iHSmqNFyFtS71rLBtVy4Kc4X2WS1Wwgm&q=${category}&limit=10`;
  
    //Petición
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  
    return gifs;
  };

  export default getGifs;
  