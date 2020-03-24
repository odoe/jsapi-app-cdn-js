module.exports = {
  root: true,
  env: {
      node: true
  },
  extends:  [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
 parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  }
};