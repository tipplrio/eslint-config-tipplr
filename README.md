# eslint-config-tipplr

This package provides Tipplr's .eslintrc as an extensible [shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Usage

We now export three ESLint configurations for your usage.

### eslint-config-tipplr

Our default export contains the base of our ESLint rules, including ECMAScript 6+. It currently requires only `eslint`.

1. `npm install eslint eslint-config-tipplr --save-dev`
2. add `"extends": "tipplr"` to your .eslintrc

### eslint-config-tipplr/legacy

Lints ECMAScript 5 and below. This also only requires `eslint`.

1. `npm install eslint eslint-config-tipplr --save-dev`
2. add `"extends": "tipplr/legacy"` to your `.eslintrc`

### eslint-config-tipplr/react

This contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install eslint eslint-plugin-react eslint-config-tipplr --save-dev`
2. add `"extends": "tipplr/react"` to your .eslintrc

See also [Tipplr's Javascript Style Guide](https://github.com/jgkim/styleguides) and
the [ESlint config documentation](http://eslint.org/docs/user-guide/configuring)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes.

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

## Changelog

### 0.0.1
* forked from Airbnb's [.eslintrc](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
