module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    // "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:canonical/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react-hooks", "prettier", "unused-imports", "@typescript-eslint", "canonical"],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "canonical/sort-keys": "off",
    "canonical/destructuring-property-newline": "off",
    "canonical/export-specifier-newline": "off",
    "canonical/import-specifier-newline": "off",
    "canonical/no-unused-exports": [
      "warn",
      {
        tsConfigPath: "./tsconfig.json",
      },
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
