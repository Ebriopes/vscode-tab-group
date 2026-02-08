// .vscode-test.js
const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig({
	label: 'integration',
	files: 'src/test/integration/**/*.test.ts',
	mocha: { ui: 'bdd', timeout: 10000, require: ['ts-node/register', 'tsconfig-paths/register'] },
	launchArgs: ['--user-data-dir=${workspaceFolder}/.vscode-test/user-data', '--disable-extensions'],
});
