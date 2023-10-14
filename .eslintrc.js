module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'react/destructuring-assignment': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/require-default-props': 0,
    'no-use-before-define': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx']}],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {node: {extensions: ['.js', '.jsx', '.ts', '.tsx']}},
  },
};
