Inicio = Instruccion+ _

// Reglas PEG      
//Instrucciones = Instruccion (_ Instruccion)*
Instruccion = _ Identificador _ Literales? _ "=" _ Eleccion (_";")?  // Regla     
          / Comentarios

Eleccion
  = Concatenacion (_ "/" _ Concatenacion)*

Concatenacion
  = pluck (_ pluck !(_ Literales? _ "="))*

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
  = [a-zA-Z_]i[a-zA-Z0-9_]i*

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

_ "Espacios en Blanco"
  = [ \t\n\r]*