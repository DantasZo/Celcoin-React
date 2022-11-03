import { useState, useEffect } from "react";
import axios from "axios";
import loading from "./assets/loading.gif" 

function App() {

  const[image,setImage] = useState(null)
  const API = "https://dog.ceo/api/breeds/image/random"
    
  useEffect(() =>{
  axios.get(API)
  .then((response) => {
  setImage(response.data.message);
  })
  .catch(e => console.log("deu ruim! 😢", e));
 }, []);

  function BuildImage() {
    if (image === null) return <img src={loading} alt="carregando..." />
    if (image.length === 0) return <h1>Poxa, que peninha! Não há doguinhos cadastrados</h1>
 
       return( 
         
       <img src={image} alt="imagem de cachorro" />
     
       )
   

   
  }
  

  const dog = BuildImage()
  
  return (
    
    <div className="view">
      <div className="image">
        {dog}
      </div>
    </div>
  );
}

export default App;