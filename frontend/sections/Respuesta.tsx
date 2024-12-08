import React from "react";
import "../styles/Respuesta.css"


type props ={

    respuestaContenido :string 



}

function Respuesta ({ respuestaContenido }:props) { 



  return (

    <div className="Respuesta-Area">
      <textarea
        value={respuestaContenido } 

        readOnly 
        className="Text_Area"
      />
    </div>
  );
}

export default Respuesta;