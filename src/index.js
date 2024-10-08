'use strict';

module.exports = {
  plugins: ['prettier', '@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint typescript parser
  extends: [],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of TSX
    },
    project: './tsconfig.json',
  },
  rules: {
    // prettier
    'prettier/prettier': 'error',
    // non-formatting related AirBnB rules
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'no-eval': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'prefer-arrow-callback': 'error',
    'no-duplicate-imports': 'error',
    'one-var': ['error', 'never'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    eqeqeq: 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-else-return': 'error',
    'spaced-comment': 'error',
    'no-new-wrappers': 'error',
    radix: 'error',
    'no-shadow-restricted-names': 'error',
    '@typescript-eslint/no-this-alias': 'error',

    // react rules
    'react/jsx-boolean-value': 'error',
    'react/jsx-key': 'error',
    'react/no-string-refs': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': 'error',

    // team rules
    'prefer-object-spread': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'quote-props': ['error', 'as-needed'],
    'no-fallthrough': 'error',
    '@typescript-eslint/member-ordering': 'error',
    'max-classes-per-file': ['error', 1],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    "@typescript-eslint/no-unsafe-function-type": "error",
    "@typescript-eslint/no-empty-object-type": "error",
    "@typescript-eslint/no-wrapper-object-types": "error",
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'guard-for-in': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums.
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // Allow UPPER_CASE for variables to cater for 23.10
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      // Allow any naming convention for properties, because (1) Airbnb does not specify any naming conventions for properties (2) The `camelcase` rule specifically disables checking properties: https://github.com/airbnb/javascript/blob/06b3ab11d9a443ff46f052dd00375e271e5146e6/packages/eslint-config-airbnb-base/rules/style.js#L24
      {
        selector: 'property',
        format: null,
      },
      // Allow any naming convention for enum members, because Airbnb has no recommendation
      {
        selector: 'enumMember',
        format: null,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    'no-restricted-imports': ['error', 'rxjs', 'lodash'],
    'no-caller': 'error',
    'no-bitwise': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'constructor-super': 'error',
    'no-empty': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-sparse-arrays': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    'use-isnan': 'error',
    'arrow-body-style': 'error',
    'new-parens': 'error',
    // TODO: when released, enable this rule
    // '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    'no-floating-decimal': 'error',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
