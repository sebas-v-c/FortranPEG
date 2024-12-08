
import React, { useState } from "react"; // Importamos React y el hook useState
import CodeMirror from "@uiw/react-codemirror"; // Importamos CodeMirror
import { javascript } from "@codemirror/lang-javascript"; // Soporte para sintaxis JavaScript
import { oneDark } from "@codemirror/theme-one-dark"; // Tema oscuro


import "../styles/AreaTexto.css";

type props = {

  textoNuevo : (texto:string) => void

}

function AreaTexto ({textoNuevo } :props){

    const [contenido,setcontido] = useState <string>("");
    
    function manejoContendio(value:string){

      setcontido(value);



    }

    function accionBoton (){
        textoNuevo(contenido);
      }


      return(
        <div className="Area">
    
            <CodeMirror
            value={contenido}
            height="400px" 
            theme={oneDark} 
            extensions={[javascript()]} 
            onChange={manejoContendio} 

            />
            <button onClick={accionBoton} className="add-button">
            Analizar
            </button>
            
        </div>

      )
    


}

export default AreaTexto;

