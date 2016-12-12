module.exports = {
  rules: {
    // disallows unnecessary return await
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',
    // disallow async functions which have no await expression
    // http://eslint.org/docs/rules/require-await
    'require-await': 'error',
    'class-methods-use-this': 'off',
    'no-multi-spaces': ['error', {
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }],
  },
};
