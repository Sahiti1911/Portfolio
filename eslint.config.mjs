// eslint.config.js
import pluginAngular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import templateParser from "@angular-eslint/template-parser";
import pluginPrettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import htmlRules from "./.eslint/rules/html-rules.js";
import noAny from "./.eslint/rules/no-any.js";
import pluginSelectorNaming from "./.eslint/rules/selector-naming.js";

export default [
  {
    ignores: ["projects/**/*"],
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "custom-rules": noAny,
      "selector-naming": pluginSelectorNaming,
      "@angular-eslint": pluginAngular,
      "@typescript-eslint": tseslint.plugin,
      prettier: pluginPrettier,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "prettier/prettier": "error",
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variableLike",
          format: ["camelCase", "UPPER_CASE"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "custom-rules/no-any": "error",
      "selector-naming/selector-naming": "error",
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: templateParser,
    },
    plugins: {
      "html-rules": htmlRules,
      "@angular-eslint/template": angularTemplate,
    },
    rules: {
      "@angular-eslint/template/alt-text": "error",
      "@angular-eslint/template/button-has-type": "error",
      "html-rules/button-must-have-btn-class": "error",
    },
  },
];
