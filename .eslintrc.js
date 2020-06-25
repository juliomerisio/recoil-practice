module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ["temp.js", "node_modules", "generated"],

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, {args: 'none'}]
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    "react/jsx-curly-newline": 'off',
    'react/prop-types': 'off',
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", 'tsx'] }],
    'prettier/prettier': 'error',
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never",
        "tsx": "never",
        "ts": "never"
      }
    ],
    "camelcase": "off",
    "no-underscore-dangle": "off"
  },
};
