import { useState } from "react";
import AreaTexto from "./sections/AreaTexto";
import Respuesta from "./sections/Respuesta";
import "./styles/App.css"


function App() {

  const [texto,setTexto]=useState <string> ("");

  function manejoTexto (value:string) {
    setTexto(value);

  }

  
    const [color, setColor] = useState("black");
  

    function cambiarColor() {
      // Cambia el color del texto basándote en una condición
      setColor(color === "black" ? "red" : "black");
    }


  return (
      
    <div className="div_principal"> <h1>FortranPEG</h1>
    
    <div className="container">
     

      <AreaTexto textoNuevo={manejoTexto} /> 
      

      

      <Respuesta respuestaContenido={texto} /> 



      
    </div>
    </div>
    
    
      
  

  );
}

export default App;
