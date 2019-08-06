module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'spaced-comment': 'off',
    'padded-blocks': 'off',
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'eol-last': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'no-else-return': 'off',
    'react/no-did-update-set-state': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': ['on', { allow: 'single-child' }],
    'no-console': ["error", { allow: ["warn", "error"] }],
    'no-plusplus': 'off',
  },
};