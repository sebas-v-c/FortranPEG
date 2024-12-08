import React from "react";
import "../styles/Respuesta.css"


type props ={
    respuestaContenido :string 
    color: string

}

function Respuesta ({ respuestaContenido, color }:props) { 



  return (

    <div className="Respuesta-Area">
      <textarea
        value={respuestaContenido } 
        style={{ color: color }}
        readOnly 
        className="Text_Area"
      />
    </div>
  );
}

export default Respuesta;