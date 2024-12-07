// peggy no reconoce espacios en blanco
Inicio = _ Identificador _ "=" _ Expresiones _
 
Expresiones = Literal 

Literal = "\"" Texto "\""
        / "'" Texto "'"

Texto
   = $([a-zA-Z0-9 ]*) 

// Expresiones regulares, $ Indica que se captura el texto coincidente como un valor.
Tipo_Comilla = "'" / "\""

Identificador
  = $([a-zA-Z_] [a-zA-Z0-9_]*) 

_ = [ \t\n\r]* // espacios en blanco posible