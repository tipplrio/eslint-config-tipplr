module.exports = {
  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      optionalDependencies: false,
    }],
  },
};
