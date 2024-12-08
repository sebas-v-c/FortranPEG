import { useState } from "react";
import AreaTexto from "./sections/AreaTexto";
import Respuesta from "./sections/Respuesta";
import * as Parser from "../parser/fortranpeg";
import "./styles/App.css"


function App() {

  const [texto,setTexto]=useState <string> ("");
  const [color, setColor] = useState("black");

  function manejoTexto (value:string) {
    try {
      const parser = Parser.parse(value);
      setColor("black");
      setTexto("Gramática aceptada correctamente")
    } catch(err){
      if (err instanceof Parser.PeggySyntaxError){
        setColor("red")
        setTexto("Se ha encontrado un error en la gramática:\n" + err.message);
      } else {
        console.error("an unexpected error ocurred: ", err);
      }
    }
  }

  return (
      
    <div className="div_principal"> <h1>FortranPEG</h1>
    
    <div className="container">
     

      <AreaTexto textoNuevo={manejoTexto} /> 
      

      

      <Respuesta respuestaContenido={texto} color={color} /> 



      
    </div>
    </div>
    
    
      
  

  );
}

export default App;
