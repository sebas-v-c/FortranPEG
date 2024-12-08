# Proyecto FortranPEG

Este proyecto utiliza [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) y [Peggy.js](https://peggyjs.org/) para la generación de parsers, así como [Vitest](https://vitest.dev/) para las pruebas unitarias.

## Requisitos Previos

- **Node.js**: Asegúrate de tener instalado [Node.js](https://nodejs.org).
- **VSCode (recomendado)**: Para una experiencia de desarrollo óptima, se recomienda [Visual Studio Code](https://code.visualstudio.com/) junto con sus extensiones para TypeScript, Vitest y debugging de Node.

## Estructura del Proyecto
├─ frontend/ # Código del front-end en React + Vite  
├─ parser/ # Gramática PEG y parser generado   
│ ├─ grammar.pegjs # Definición de la gramática  
│ └─ parser.ts # Parser generado por Peggy (no editar manualmente)  
├─ tests/ # Pruebas unitarias con Vitest  
└─ package.json  


## Scripts Disponibles

En `package.json` se han definido varios comandos para facilitar el flujo de trabajo:

- **Instalación de Dependencias**:
```bash
npm install
```
- **Generar el parser**: Antes de ejecutar las pruebas o el build, es importante generar el parser a partir de la gramática PEG.
```bash
npm run peggy
```

- **Iniciar el Servidor de Desarrollo**: Levanta el frontend con Vite en modo desarrollo
```bash
npm run dev
```
Luego abre ![localhost:5173](http://localhost:5173)

- **Ejecutar las pruebas unitarias**: Ejecuta las pruebas escritas con Vitest, generando el parser antes de correrlas, principalmente sirve para pruebar el parser
```bash
npm run test
```

- **Build de Producción**: Genera la version optimizada del frontend para producción
```bash
npm run build
```


- **Vista Previa de la Build**: Sirve la build para inspecci´)n local 
```bash
npm run preview
```

## Depuración (Debugging)
### Debugging con VSCode (Recomendado)
1. Abre el proyecto en VSCode.
2. Extensiones recomendadas:
   + "Debugger for Node.js" (integrado en VSCode por defecto)
   + Extensiones para Typescript y Vitest
3. Ve a la pestaña de `Run and Debug` y selecciona `Debug Parser`. Podrás colocar breakpoints en tus archivos .ts y depurar paso a paso

### Debugging sin VSCode (Chrome DevTools)
1. Ejecuta las pruebas con inspección
```bash
npx vitest run --inspect-brk --no-file-parallelism
```
2. Abre ![chrome://inspect](chrome://inspect) en Chrome
3. Haz click en "Open dedicated DevTools for Node" y coloca breakpoints en la pestaña "Sources"
4. Presiona continuar (Play) para ejecutar el código hasta tu breakpoint

## Consejos finales 
+ Ejecuta `npm run peggy` cuando modifiques `fortranpeg.pegjs`
+ Usa `npm run test` frecuentemente para validar el parser 
+ Aprovecha las herramientas de debugging para inspeccionar el estado interno de las pruebas del parser