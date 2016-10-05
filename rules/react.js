module.exports = {
  rules: {
    'new-cap': ['error', {
      newIsCap: true,
      capIsNewExceptions: ['Immutable'],
    }],
    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': 'off',
    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 'off',
  },
};
