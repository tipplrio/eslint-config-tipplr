import test from 'ava';
import { CLIEngine } from 'eslint';
import eslintrc from '../react';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  // This rule fails when executing on text.
  rules: { indent: 0 },
});

function lint(text) {
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0 */
${body}
}
`;
}

test('react prop order: a good component', t => {
  t.plan(3);
  const result = lint(wrapComponent(`
componentWillMount() {}
componentDidMount() {}
setFoo() {}
getFoo() {}
setBar() {}
someMethod() {}
renderDogs() {}
render() { return <div />; }
`));

  t.falsy(result.warningCount, 'no warnings');
  t.falsy(result.errorCount, 'no errors');
  t.deepEqual(result.messages, [], 'no messages in results');
});

test('react prop order: when random method is first', t => {
  t.plan(2);
  const result = lint(wrapComponent(`
someMethod() {}
componentWillMount() {}
componentDidMount() {}
setFoo() {}
getFoo() {}
setBar() {}
renderDogs() {}
render() { return <div />; }
`));

  t.truthy(result.errorCount, 'fails');
  t.is(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
});

test('react prop order: when random method after lifecycle methods', t => {
  t.plan(2);
  const result = lint(wrapComponent(`
componentWillMount() {}
componentDidMount() {}
someMethod() {}
setFoo() {}
getFoo() {}
setBar() {}
renderDogs() {}
render() { return <div />; }
`));

  t.truthy(result.errorCount, 'fails');
  t.is(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
});
