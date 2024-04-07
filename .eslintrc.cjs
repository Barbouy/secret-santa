/* eslint-env node */

module.exports = {
  root: true,
  env: {
    "webextensions": true,
    "browser": true,
    "es2021": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "vue/multi-word-component-names": ["off"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": { "max": 1 },
        "multiline": { "max": 1 }
      }
    ],

    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside",
        multiline: "below"
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      }
    ],
    "object-curly-newline": [
      "warn",
      {
        multiline: true,
        minProperties: 4,
      },
    ],
    "object-property-newline": [
      "warn",
      { allowAllPropertiesOnSameLine: false },
    ],
    "object-curly-spacing": ["warn", "always"],
    "key-spacing": [
      "warn",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "sort-imports": ["warn", { ignoreCase: true }],
  },
  overrides: [
    {
      "files": ["*.vue"],
      "rules": { "no-undef": "off" }
    }
  ],
}