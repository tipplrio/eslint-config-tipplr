module.exports = {
  rules: {
    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [2, {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': [2, 'never'],
  },
};
