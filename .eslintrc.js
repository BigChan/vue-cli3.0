module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config', 'el'],
      },
    ],
    'no-shadow': ['error', { allow: ['state'] }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
