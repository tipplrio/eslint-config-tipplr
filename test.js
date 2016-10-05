module.exports = {
  plugins: [
    'ava',
  ],
  extends: [
    ...[
      './base',
    ].map(require.resolve),
    'plugin:ava/recommended',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    Feature: true,
    Scenario: true,
    Given: true,
    When: true,
    Then: true,
    And: true,
    But: true,
  },
  rules: {
    // require a capital letter for constructors
    'new-cap': ['error', {
      capIsNewExceptions: [
        'Feature',
        'Scenario',
        'Given',
        'When',
        'Then',
        'And',
        'But',
      ],
    }],
  },
};
