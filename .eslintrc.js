module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  ignorePatterns: ['**/*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'semi': ['warn', 'always'],
    'spaced-comment': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-readonly': 0,
    'no-labels': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/explicit-function-return-type': 0
  }
};