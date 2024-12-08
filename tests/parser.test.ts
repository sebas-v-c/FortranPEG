import { describe, it, expect } from "vitest";
import * as Parser from "../parser/fortranpeg";

describe("Parser con Peggy", () => {
    // PRUEBA PREDETERMINADA PARA PRObAR
    it("Prueba predeterminada sin entrada especifica", () => {
        //const result = Parser.parse(input);
        let Entrada: string = `
subexpresion
  = "hola, " ("que tal?" / "como estas?" / 'y adios.');

conjuntos
  = [abc]
  / [a-z0-9]
  / [abc0-9ghiA-Z]
  ;

unarias
  = (regla? regla2)+
  / regla3* / (regla4?)*;
         `;

        const result = Parser.parse(Entrada);
    });
});
