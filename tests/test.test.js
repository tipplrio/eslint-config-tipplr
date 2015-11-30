import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '../test';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  // This rule fails when executing on text.
  rules: {indent: 0},
});

function lint(text) {
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  return cli.executeOnText(text).results[0];
}

test('validate a test using mocha-gherkin', t => {
  t.plan(3);
  const result = lint(`
  Feature('Feature',
    'Some text',
    'Some more test', () => {
      Scenario('Scenario', () => {
        Given('a condition');
        And('another condition');
        When('an action occurs');
        Then('an expected result happens');
        it('should be OK.');
      });
    });
`);

  t.notOk(result.warningCount, 'no warnings');
  t.notOk(result.errorCount, 'no errors');
  t.deepEquals(result.messages, [], 'no messages in results');
});
