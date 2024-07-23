module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		jest: true,
	},
	plugins: ['import', 'html', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser', // @typescript-eslint 파서 추가
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
				'newlines-between': 'always',
				// alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-explicit-any': 'off',
	},
	ignorePatterns: ['*.md'], // Markdown 파일을 무시하도록 추가
};
