// peggy no reconoce espacios en blanco
Inicio = _ Identificador _ "=" _ Expresiones _
 
Expresiones = Tipo_Comilla _ Literales _ Tipo_Comilla 

// Expresiones regulares, $ Indica que se captura el texto coincidente como un valor.
Tipo_Comilla = "'" / "\""

Identificador
  = $([a-zA-Z_] [a-zA-Z0-9_]*) 
Literales
   = $([a-zA-Z]+) 
_ = [ \t\n\r]* // espacios en blanco posible

