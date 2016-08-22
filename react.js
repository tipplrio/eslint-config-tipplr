module.exports = {
  extends: [
    './base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    './rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {
    // Allow redux connected components
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 0,
  },
};
