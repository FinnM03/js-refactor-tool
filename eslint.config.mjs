import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      // ✅ Auto-fixable rules for testing
      semi: ["error", "always"],           // Require semicolons
      quotes: ["error", "single"],         // Enforce single quotes
      indent: ["error", 2],                // Enforce 2-space indent
      eqeqeq: ["error", "always"],         // Require ===
      'no-unused-vars': "warn",            // Warn on unused vars
      'no-console': "warn",                // Warn on console.log
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
