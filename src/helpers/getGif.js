

 export const getGif=async(category)=>{
     
    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI ( category ) }&limit=7&api_key=gcMXt2EXjtZ8A4pKzQ8g5J7Y4yTXBKlp`

    const resp =await fetch(url);
    const data =await resp.json();

   const gifs = data.data.map (img => {
            return {
                id: img.id,
                title: img.title,
                url:img.images?.downsized_medium.url
               
            };
        })
   return gifs;
    
}