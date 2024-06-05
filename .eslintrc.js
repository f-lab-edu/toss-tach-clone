export default {
	root: true,
	env: {
		node: true,
	},
	plugins: [],
	extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {},
};
