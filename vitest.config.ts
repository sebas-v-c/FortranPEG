import { defineConfig } from "vitest/config";

// Configurando node para poder hacer debug del archivo PEGGY
export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        include: ["tests/**/*.test.ts"],
    },
});
