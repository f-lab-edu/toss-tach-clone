module.exports = {
	root: true,
	env: {
		node: true,
		browser: true, // 브라우저 환경도 추가
		es2021: true,
	},
	plugins: ['import', 'html'], // html 플러그인 추가
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
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
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
	},
};
