module.exports = {
  'extends': 'eslint-config-tipplr/base',
  'rules': {
    // require a capital letter for constructors
    'new-cap': [2, {
      'capIsNewExceptions': [
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
  'globals': {
    'Feature': true,
    'Scenario': true,
    'Given': true,
    'When': true,
    'Then': true,
    'And': true,
    'But': true,
  },
};
