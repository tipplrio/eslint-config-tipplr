module.exports = {
  rules: {
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
