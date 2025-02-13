import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import pluginPrettier from "eslint-plugin-prettier";
import pluginConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    ignores: ["coverage", "node_modules"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.react,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      jest: pluginJest,
      prettier: pluginPrettier,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginConfigPrettier,
];
