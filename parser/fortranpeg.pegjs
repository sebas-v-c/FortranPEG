// peggy no reconoce espacios en blanco
Inicio = _ Identificador _ "=" _ Eleccion _

Eleccion
  = Concatenacion (_ "/" _ Concatenacion)*


Concatenacion = Symbol_Expresion (_ Symbol_Expresion)*
// Expresiones

Symbol_Expresion  = Expresiones [?+*]? // Puedem estar o no estar las expresiones ?, + o *

Expresiones = Literales
            / "[" _ caracteres _ "]"
            / Identificador   // regla
            /"(" _ Expresiones _ ")" // subexpresion

// Expresiones regulares, $ Indica que se captura el texto coincidente como un valor.
Identificador
  = $([a-zA-Z_] [a-zA-Z0-9_]*) 


Literales 
=   "'" _ Literal _ "'"
  / "\"" _ Literal _ "\""



Literal
   = $([a-zA-Z]+) 
_ = [ \t\n\r]* // espacios en blanco posible

caracteres =  [a-zA-Z] _ "-" _ [a-zA-Z]
            / Literal

