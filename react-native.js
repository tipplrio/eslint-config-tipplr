module.exports = {
  extends: [
    './react',
    './rules/react-native',
  ].map(require.resolve),
  rules: {
    // With React Native, only .js files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // Cf. https://github.com/facebook/react-native/pull/5233
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ios.js',
          '.android.js',
        ],
      },
    },
  },
};
