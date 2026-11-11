import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const source = fileURLToPath(new URL("./source/", import.meta.url));

export default defineConfig({
  // The library imports itself by package name; in tests that resolves to the TypeScript source.
  resolve: { alias: [{ find: /^@sharadox\/prettier-configuration-web-library\/(.*)$/, replacement: `${source}$1` }] },
  test: {
    environment: "node",
    include: ["source/**/?(*-)unit-test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: ["source/**/*.{ts,tsx}"],
      exclude: [
        "source/**/*unit-test.{ts,tsx}",
        "source/**/type.ts",
        "source/**/test-fixture/**",
        "source/**/entry/**",
      ],
      thresholds: { statements: 100, branches: 100, functions: 100, lines: 100 },
    },
  },
});
