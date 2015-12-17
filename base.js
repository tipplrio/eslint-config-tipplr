module.exports = {
  'extends': [
    'eslint-config-tipplr/legacy',
    'eslint-config-tipplr/rules/es6',
  ].map(require.resolve),
  'rules': {},
};
