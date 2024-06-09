export default {
	root: true,
	env: {
		node: true,
	},
	plugins: ['import'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
	},
};
