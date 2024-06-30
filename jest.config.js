export default {
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|less|scss|sass)$': 'jest-transform-css',
	},
	transform: {
		'^.+\\.(js|jsx)?$': 'babel-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	silent: true, // 모든 콘솔 로그 무시
};
