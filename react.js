module.exports = {
  'extends': [
    'eslint-config-tipplr/base',
    'eslint-config-tipplr/rules/react',
  ].map(require.resolve),
  'rules': {},
};
