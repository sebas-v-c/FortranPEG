import { describe, it, expect } from "vitest";
import * as Parser from "../parser/fortranpeg";
import { readFileSync } from "fs";
import { join } from "path";

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

    it("Prueba para archivo de prueba 1", () => {
        const input = readFileSync(join(__dirname, 'archivos_prueba', 'prueba1.txt'), 'utf-8')
        const result = Parser.parse(input);
        expect(result).toBeDefined();
    });


    it("Prueba para archivo de prueba 2", () => {
        const input = readFileSync(join(__dirname, 'archivos_prueba', 'prueba2.txt'), 'utf-8')
        const result = Parser.parse(input);
        expect(result).toBeDefined();
    });


    it("Prueba para archivo de prueba 3", () => {
        const input = readFileSync(join(__dirname, 'archivos_prueba', 'prueba3.txt'), 'utf-8')
        const result = Parser.parse(input);
        expect(result).toBeDefined();
    });

    it('Deberia fallar al tratar de validar entrada incorrecta', () => {
        expect(() => Parser.parse("a = 'si'")).toThrow();
    });
});
