# eslint-config-tipplr

[![Build Status](https://travis-ci.org/tipplrio/eslint-config-tipplr.svg?branch=master)](https://travis-ci.org/tipplrio/eslint-config-tipplr)

This package provides Tipplr's .eslintrc as an extensible [shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Usage

We now export four ESLint configurations for your usage.

### eslint-config-tipplr

Our default export contains the base of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `PKG=eslint-config-tipplr npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"` (which produces and runs a command like `npm install --save-dev eslint-config-tipplr eslint@^2.13.1 eslint-plugin-jsx-a11y@^1.5.5 eslint-plugin-ava@^2.5.0 eslint-plugin-import@^1.12.0 eslint-plugin-react@^5.2.2 eslint-plugin-react-native@^1.2.0` but with whatever the proper version numbers are)
2. add `"extends": "tipplr"` to your .eslintrc

### eslint-config-tipplr/test

This contains the default configuration and some rules for writing tests using [`mocha-gherkin`](https://github.com/jgkim/mocha-gherkin).

1. `npm install --save-dev eslint eslint-plugin-ava eslint-plugin-import eslint-config-tipplr`
2. add `"extends": "tipplr/test"` to your .eslintrc

### eslint-config-tipplr/legacy

Lints ECMAScript 5 and below. This also requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint eslint-plugin-import eslint-config-tipplr`
2. add `"extends": "tipplr/legacy"` to your `.eslintrc`

### eslint-config-tipplr/react

This contains all of our ESLint rules except one regarding React Native, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-tipplr`
2. add `"extends": "tipplr/react"` to your .eslintrc

### eslint-config-tipplr/react-native

This contains all of our ESLint rules, including ECMAScript 6+, React, and React Native. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-native`, and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-native eslint-plugin-jsx-a11y eslint-config-tipplr`
2. add `"extends": "tipplr/react"` to your .eslintrc

See also [Tipplr's Javascript Style Guide](http://engineering.tipplr.io/styleguides/) and
the [ESlint config documentation](http://eslint.org/docs/user-guide/configuring)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes.

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
