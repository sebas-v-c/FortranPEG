import { describe, it, expect } from "vitest";
import * as Parser from "../parser/fortranpeg";

describe("Parser con Peggy", () => {
    // PRUEBA PREDETERMINADA PARA PRObAR
    it("Prueba predeterminada sin entrada especifica", () => {
        //const result = Parser.parse(input);
        let Entrada: string = ` rango =  "foo" / "bar" / "baz" `;

        const result = Parser.parse(Entrada);
    });
});
