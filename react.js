module.exports = {
  extends: [
    './base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
