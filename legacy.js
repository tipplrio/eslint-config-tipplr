module.exports = {
  'extends': [
    'eslint-config-tipplr/rules/best-practices',
    'eslint-config-tipplr/rules/errors',
    'eslint-config-tipplr/rules/legacy',
    'eslint-config-tipplr/rules/node',
    'eslint-config-tipplr/rules/strict',
    'eslint-config-tipplr/rules/style',
    'eslint-config-tipplr/rules/variables',
  ].map(require.resolve),
  'env': {
    'browser': true,
    'node': true,
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {},
};
