module.exports = {
  rules: {
    'no-multi-spaces': [2, {
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true,
      },
    }],
  },
};
