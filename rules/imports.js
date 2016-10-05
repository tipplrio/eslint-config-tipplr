module.exports = {
  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],
    // Reports any imports that come after non-import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',
    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'off',
    // Reports when a module is imported but not assigned
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',
    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',
    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar to determine correct parsing goal
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    'import/unambiguous': 'off',
  },
};
