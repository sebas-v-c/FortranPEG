// peggy no reconoce espacios en blanco
Inicio = Reglas 

// Reglas PEG      
Reglas = Regla (_ Regla)*
Regla = _ Identificador _ "=" _ Eleccion _ ";" _

Eleccion
  = Concatenacion (_ "/" _ Concatenacion)*

Concatenacion = Symbol_Expresion (_ Symbol_Expresion)*
// Expresiones

Symbol_Expresion  = Expresiones [?+*]? // Puedem estar o no estar las expresiones ?, + o *

Expresiones = Literales
            / "[" _ caracteres _ "]"
            / Identificador   // regla
            /"(" _ Eleccion _ ")" // subexpresion

// Expresiones regulares, $ Indica que se captura el texto coincidente como un valor.
Identificador
  = $([a-zA-Z_] [a-zA-Z0-9_]*) 

Literales 
   =  ["] [^"]* ["]
    / ['] [^']* ['] 

caracteres = caracter (_ caracter)*

caracter =   [^[\]-]* _ "-" _  [^[\]-]*
          /  [^[\]]

_ = [ \t\n\r]* // espacios en blanco posible
