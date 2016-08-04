import test from 'ava';
import { CLIEngine } from 'eslint';
import eslintrc from '../react-native';

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

test('react-native: color literals in styles', t => {
  t.plan(3);
  const result = lint(`
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default function Hello() {
  return (
    <View>
      <Text style={{ backgroundColor: '#FFFFFF' }}>Hello</Text>;
    </View>
  );
}
`);

  t.truthy(result.errorCount, 'fails');
  t.is(result.messages[0].ruleId, 'react-native/no-inline-styles', 'fails due to inline styles');
  t.is(result.messages[1].ruleId, 'react-native/no-color-literals', 'fails due to color literals');
});

test('react-native: platform-specific extensions', t => {
  t.plan(3);
  const result = lint(`
import React from 'react';
import { View } from 'react-native';
import Component from './fixtures/Component';

export default function Hello() {
  return (
    <View>
      <Component />;
    </View>
  );
}
`);

  t.falsy(result.warningCount, 'no warnings');
  t.falsy(result.errorCount, 'no errors');
  t.deepEqual(result.messages, [], 'no messages in results');
});
