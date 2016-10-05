module.exports = {
  plugins: [
    'react-native',
  ],
  rules: {
    // Detect unused StyleSheet rules in React components
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/no-unused-styles': 'error',
    // Enforce using platform specific filenames when necessary
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 'error',
    // Detect inline styles in components
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 'error',
    // Detect color literals in styles
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-color-literals': 'error',
  },
  globals: {
    navigator: false,
    requestAnimationFrame: false,
  },
};
