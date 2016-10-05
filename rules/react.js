module.exports = {
  rules: {
    'new-cap': ['error', {
      newIsCap: true,
      capIsNewExceptions: ['Immutable'],
    }],
  },
};
