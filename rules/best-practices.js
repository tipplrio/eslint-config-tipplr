module.exports = {
  rules: {
    'class-methods-use-this': 0,
    'no-multi-spaces': [2, {
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }],
  },
};
