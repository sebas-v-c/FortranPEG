/*
function hola() {
    console.log("holi");
}

export default hola;
*/

import * as Parser from './fortranpeg';

export default function parseInput(input: string) {
    try {
        Parser.parse(input);
    } catch (e) {
        return e as string;
    }
    return 'Todo bien';
}