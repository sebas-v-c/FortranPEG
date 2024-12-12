Inicio = Instruccion+ __

// Reglas PEG      
//Instrucciones = Instruccion (_ Instruccion)*
Instruccion = __ Identificador __ Literales? __ "=" _ Eleccion __ (";")?  // Regla     
          / Comentarios
Eleccion
  = Concatenacion (__ "/" __ Concatenacion)*

Concatenacion
  = pluck (_ pluck)*

pluck
  = "@"? _ etiqueta

etiqueta
  = (Identificador _ ":")? _ Symbol_Expresion

Symbol_Expresion  = ("$"/"&"/"!")? _ Expresiones _ contador? // Puedem estar o no estar las expresiones ?, + o *

contador
  = [?+*]
  / "|" _ (numero /Identificador) _ "|"
  / "|" _ (numero /Identificador)? _ ".." _ (numero /Identificador)? _ "|" 
  / "|" _ (numero /Identificador)? _ "," _ Eleccion _ "|"
  / "|" _ (numero /Identificador)? _ ".." _ (numero /Identificador)? _ "," _ Eleccion _ "|"


// Expresiones
Expresiones = Literales "i"?
            / "[" _ caracteres _ "]" "i"?
            / Identificador   // regla
            / "(" _ Eleccion _ ")" // subexpresion
            / "."
            / "!."

Identificador
  = $([a-zA-Z_] [a-zA-Z0-9_]*) 

Literales 
   =  ["] [^"]* ["] 
    / ['] [^']* ['] 

caracteres = caracter (_ caracter)*

caracter =   [^[\]-]* _ "-" _  [^[\]-]*
          /  [^[\]]


Comentarios "Comentario"
= "//" (.)* [\n]?
/ "/" (.) "*/"

numero
  = [0-9]+

_ "espacios en blanco"
  = [ \t]* // espacios en blanco posible

__ "nueva linea"
  = [ \t\n\r]*