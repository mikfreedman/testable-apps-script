import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        global: "writable",
      },
    },
  },
  {
    ignores: ["dist/", "node_modules/", "esbuild.config.js", "eslint.config.js"],
  },
);
