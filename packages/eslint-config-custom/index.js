module.exports = {
  extends: [
    "next/core-web-vitals",
    "turbo",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // DO NOT TOUCH
    // These rules will disable red squiggly lines in VS Code
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/return-await": "off",
    // These rules need to be renabled since got turned off
    "dot-notation": ["error", { allowKeywords: true }],
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-throw-literal": "error",
    "no-return-await": "error",
  },
};
